import { Injectable, effect } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSignalService } from '../../signals/auth/auth-signal.service';
import { DEFAULT_AUTH_VALUE } from '../../signals/auth/auth.signal.default';
import { AuthStorageService } from '../../storage/auth/auth-storage.service';
import { IAuth } from '../../../models/interfaces/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthfacadeService implements IAuth {
  constructor(
    private router: Router,
    private authSignalService: AuthSignalService,
    private authStorageService: AuthStorageService
  ) {
    this.init();
  }

  private init() {
    effect(() => this.authStorageService.set(this.authSignalService.snapshot));

    const storage = this.authStorageService.get();

    if (storage.signed) {
      return this.authSignalService.default(storage);
    }

    return this.authSignalService.default(DEFAULT_AUTH_VALUE);
  }

  login(token: string): void {
    this.authSignalService.login(token);
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    this.authSignalService.logout();
    this.router.navigate(['/login']);
  }
}
