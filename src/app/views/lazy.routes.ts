import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const lazyRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];
