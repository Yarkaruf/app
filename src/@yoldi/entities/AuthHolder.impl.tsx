import AuthHolder from "@yoldi/entities/AuthHolder";
import { Buffer } from "buffer";

export default class AuthHolderImpl<AccessTokenPayload extends { exp: number } = any, RefreshTokenPayload = any>
  implements AuthHolder<AccessTokenPayload, RefreshTokenPayload> {
  private isAuthorized: boolean = false;
  private isInitialized: boolean = false;
  private subscribers: (() => void)[] = [];
  private refreshListeners: (() => void)[] = [];
  private refreshAtTimeout: number = 0;

  private _accessToken: string = "";

  public get accessToken(): string {
    return this._accessToken;
  }

  public get initialized() {
    return this.isInitialized;
  }

  private _refreshToken: string = "";

  public get refreshToken(): string {
    return this._refreshToken;
  }

  private _accessTokenPayload?: AccessTokenPayload;

  public get accessTokenPayload() {
    return this._accessTokenPayload;
  }

  private _refreshTokenPayload?: RefreshTokenPayload;

  public get refreshTokenPayload() {
    return this._refreshTokenPayload;
  }

  public get isUserAuthorized(): boolean {
    return this.isAuthorized;
  }

  public async initialize(accessToken?: string, refreshToken?: string) {
    if (accessToken && refreshToken) {
      await this.onLogin(accessToken, refreshToken);
    }
    this.isInitialized = true;
    await this.notify();
  }

  public async onLogin(accessToken: string, refreshToken: string) {
    this._accessToken = accessToken;
    this._refreshToken = refreshToken;
    this.isAuthorized = true;
    await this.handleChanges();
  }

  public onLogout(): void {
    this._accessToken = "";
    this._refreshToken = "";
    this.isAuthorized = false;
    this.handleChanges();
  }

  public subscribe = (fn: () => void) => {
    this.subscribers.push(fn);

    return () => {
      this.subscribers = this.subscribers.filter(it => it !== fn);
    };
  };

  public onRefresh(fn: () => void): () => void {
    this.refreshListeners.push(fn);

    return () => {
      this.refreshListeners = this.refreshListeners.filter(it => it !== fn);
    };
  }

  private getPayload = (token: string) => {
    try {
      const parts = token
        .split(".")
        .map(part => Buffer.from(part.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString());

      return JSON.parse(parts[1]);
    } catch (e) {
      return undefined;
    }
  };

  private handleChanges = async () => {
    this._accessTokenPayload = this.getPayload(this._accessToken);
    this._refreshTokenPayload = this.getPayload(this._refreshToken);

    clearTimeout(this.refreshAtTimeout);

    if (this._accessTokenPayload) {
      const refreshIn = this._accessTokenPayload.exp * 1000 - new Date().getTime();

      if (refreshIn <= 5_000) {
        await this.notifyRefresh();
      } else {
        this.refreshAtTimeout = +setTimeout(() => {
          this.notifyRefresh();
        }, refreshIn - 30_000);
        await this.notify();
      }
    } else {
      await this.notify();
    }
  };

  private notify = async () => {
    for (const it of this.subscribers) {
      await it();
    }
  };

  private notifyRefresh = async () => {
    for (const it of this.refreshListeners) {
      await it();
    }
  };
}
