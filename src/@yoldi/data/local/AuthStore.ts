export default interface AuthStore {
  saveAccessToken(token: string): void;

  loadAccessToken(): string | undefined;

  removeAccessToken(): void;

  saveRefreshToken(token: string): void;

  loadRefreshToken(): string | undefined;

  removeRefreshToken(): void;
}
