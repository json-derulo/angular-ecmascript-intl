import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GettingStartedComponent} from "./getting-started/getting-started.component";

const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent,
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(mod => mod.PipesModule),
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
