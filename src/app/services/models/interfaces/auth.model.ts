import { AuthSignalModel } from '../../signals/auth/auth.signal.model';

export interface IAuth {
  login(token: string): void;
  logout(): void;
}
