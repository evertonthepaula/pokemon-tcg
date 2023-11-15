import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canActivateChild: [authGuard],
    loadChildren: () => import('./views/lazy.routes').then(routes => routes.lazyRoutes)
  },
  { path: '**', redirectTo: '' }
];
