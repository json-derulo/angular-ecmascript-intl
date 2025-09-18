import { Routes } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';

export const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent,
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.routes'),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
