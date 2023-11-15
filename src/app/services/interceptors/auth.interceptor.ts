import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { AuthSignalService } from '../signals/auth/auth-signal.service';
import { AuthSignalModel } from '../signals/auth/auth.signal.model';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authSignalService = inject(AuthSignalService);
  const auth: AuthSignalModel = authSignalService.snapshot;

  if (!auth.token) {
    return next(req)
  }

  const modifiedReq = req.clone({
    headers: req.headers.set('x-api-Key', auth.token),
  });
  return next(modifiedReq);
};
