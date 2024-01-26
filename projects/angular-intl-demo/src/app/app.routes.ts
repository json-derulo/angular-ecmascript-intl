import { Routes } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';

export const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent,
  },
  {
    path: 'pipes',
    loadComponent: () => import('./pipes/pipes.component'),
    loadChildren: () => import('./pipes/pipes.routes'),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
