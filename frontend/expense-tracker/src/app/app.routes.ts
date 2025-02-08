import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/routes').then((m) => m.DASHBOARD_ROUTES),
  },
  {
    path: 'expenses',
    loadChildren: () =>
      import('./features/expenses/routes').then((m) => m.EXPENSES_ROUTES),
  },
  { path: '**', redirectTo: '/dashboard' },
];
