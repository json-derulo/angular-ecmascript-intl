import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { CurrencyComponent } from './currency/currency.component';
import { DateComponent } from './date/date.component';
import { DecimalComponent } from './decimal/decimal.component';
import { LanguageComponent } from './language/language.component';
import { ListComponent } from './list/list.component';
import { PercentComponent } from './percent/percent.component';
import { PipesComponent } from './pipes.component';
import { RelativeTimeComponent } from './relative-time/relative-time.component';
import { UnitComponent } from './unit/unit.component';

const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
    children: [
      {
        path: 'date',
        component: DateComponent,
      },
      {
        path: 'decimal',
        component: DecimalComponent,
      },
      {
        path: 'percent',
        component: PercentComponent,
      },
      {
        path: 'currency',
        component: CurrencyComponent,
      },
      {
        path: 'unit',
        component: UnitComponent,
      },
      {
        path: 'language',
        component: LanguageComponent,
      },
      {
        path: 'country',
        component: CountryComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'relative-time',
        component: RelativeTimeComponent,
      },
      {
        path: '',
        redirectTo: 'date',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesRoutingModule {}
