import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthSignalService } from '../services/signals/auth/auth-signal.service';
import { AuthfacadeService } from '../services/facade/auth/authfacade.service';
import { AuthSignalModel } from '../services/signals/auth/auth.signal.model';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const authfacadeService = inject(AuthfacadeService);
  const authSignalService = inject(AuthSignalService);
  const auth: AuthSignalModel = authSignalService.snapshot;

  if (!auth.signed) {
    return router.createUrlTree(['/login']);
  }

  return true;
};
