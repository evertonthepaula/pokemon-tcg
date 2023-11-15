import { Injectable, effect } from '@angular/core';
import { Router } from '@angular/router';

// SERVICES
import { BaseSignalService } from '../base/base-signal.service';
import { AuthStorageService } from '../../storage/auth/auth-storage.service';

// MODEL
import { AuthSignalModel } from './auth.signal.model';

// DEFAULT
import { DEFAULT_AUTH_VALUE } from './auth.signal.default';

@Injectable({
  providedIn: 'root'
})
export class AuthSignalService extends BaseSignalService<AuthSignalModel> {
  constructor(
    private router: Router,
    private authStorageService: AuthStorageService
  ) {
    super();
    effect(() => this.authStorageService.set(this.snapshot));
    this.init();
  }

  private init() {
    const storage = this.authStorageService.get();
    if (storage.signed) {
      return this.set(storage)
    }

    return this.set(DEFAULT_AUTH_VALUE);
  }

  login(token: string): void {
    this.update({ token, signed: true });
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    this.set(DEFAULT_AUTH_VALUE);
    this.router.navigate(['/login']);
  }
}
