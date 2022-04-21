export default interface AuthHolder<AccessTokenPayload = any, RefreshTokenPayload = any> {
  initialized: boolean;
  isUserAuthorized: boolean;

  accessToken: string;
  accessTokenPayload: AccessTokenPayload | undefined;

  refreshToken: string;
  refreshTokenPayload: RefreshTokenPayload | undefined;

  initialize(accessToken?: string, refreshToken?: string): void;

  onLogin(accessToken: string, refreshToken?: string): void;

  onLogout(): void;

  subscribe(fn: () => void): () => void;

  onRefresh(fn: () => void): () => void;
}
