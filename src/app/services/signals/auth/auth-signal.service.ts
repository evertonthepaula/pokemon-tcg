import { Injectable, effect } from '@angular/core';

// BASE SIGNALS SERVICE
import { BaseSignalService } from '../base/base-signal.service';

// MODEL
import { AuthSignalModel } from './auth.signal.model';

// DEFAULT
import { DEFAULT_AUTH_VALUE } from './auth.signal.default';
import { Router } from '@angular/router';
import { AuthStorageService } from '../../storage/auth/auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSignalService extends BaseSignalService<AuthSignalModel> {
  constructor(
    private router: Router,
    private authStorageService: AuthStorageService
  ) {
    super();

    this.set(DEFAULT_AUTH_VALUE);

    effect(() => {
      this.authStorageService.set(this.snapshot);
    });
  }

  login(token: string): void {
    this.update({ token, signed: true });
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    this.update(DEFAULT_AUTH_VALUE);
    this.router.navigate(['/login']);
  }
}
