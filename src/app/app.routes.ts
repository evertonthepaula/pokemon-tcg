import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'decks',
    canActivateChild: [authGuard],
    loadChildren: () => import('./modules/decks/views/decks.routes').then(routes => routes.DecksRoutes)
  },
  {
    path: '',
    canActivateChild: [authGuard],
    loadChildren: () => import('./views/view.routes').then(routes => routes.viewRoutes),
  },
  { path: '**', redirectTo: 'login' }
];
