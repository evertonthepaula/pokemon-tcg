import { Injectable, effect } from '@angular/core';
import { Router } from '@angular/router';

// SERVICES
import { BaseSignalService } from '../base/base-signal.service';
import { AuthStorageService } from '../../storage/auth/auth-storage.service';

// MODEL
import { AuthSignalModel } from './auth.signal.model';

// DEFAULT
import { DEFAULT_AUTH_VALUE } from './auth.signal.default';
import { IAuth } from '../../../models/interfaces/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthSignalService extends BaseSignalService<AuthSignalModel> implements IAuth {
  constructor() {
    super()
  }

  login(token: string): void {
    this.update({ token, signed: true });
  }

  logout(): void {
    this.set(DEFAULT_AUTH_VALUE);
  }

  default(payload: AuthSignalModel) {
    this.set(payload);
  }
}
