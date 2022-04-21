import LocalStorage from "@yoldi/utils/LocalStorage";
import AuthStore from "@yoldi/data/local/AuthStore";

export default class AuthStoreImpl implements AuthStore {
  readonly accessTokenKey: string;
  readonly refreshTokenKey: string;

  constructor(key: string) {
    this.accessTokenKey = `${process.env.PROJECT_PREFIX}:${key}-access-token`;
    this.refreshTokenKey = `${process.env.PROJECT_PREFIX}:${key}-refresh-token`;
  }

  loadAccessToken(): string | undefined {
    return LocalStorage.getItem(this.accessTokenKey) || undefined;
  }

  removeAccessToken(): void {
    LocalStorage.removeItem(this.accessTokenKey);
  }

  saveAccessToken(token: string): void {
    LocalStorage.setItem(this.accessTokenKey, token);
  }

  loadRefreshToken(): string | undefined {
    return LocalStorage.getItem(this.refreshTokenKey) || undefined;
  }

  removeRefreshToken(): void {
    LocalStorage.removeItem(this.refreshTokenKey);
  }

  saveRefreshToken(token: string): void {
    LocalStorage.setItem(this.refreshTokenKey, token);
  }
}
