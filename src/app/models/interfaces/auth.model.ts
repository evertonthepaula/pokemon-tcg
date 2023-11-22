export interface IAuth {
  login(token: string): void;
  logout(): void;
}
