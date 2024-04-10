import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./components/landing/landing.component')
      .then(m => m.LandingComponent)},
  {path: 'admin', loadComponent: () => import('./components/admin/admin.component')
      .then(m => m.AdminComponent)}
];
