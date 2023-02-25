import {RouterModule, Routes} from "@angular/router";
import {PipesComponent} from "./pipes.component";
import {NgModule} from "@angular/core";
import {DateComponent} from "./date/date.component";
import {DecimalComponent} from "./decimal/decimal.component";
import {PercentComponent} from "./percent/percent.component";
import {CurrencyComponent} from "./currency/currency.component";
import {LanguageComponent} from "./language/language.component";
import {CountryComponent} from "./country/country.component";
import {UnitComponent} from "./unit/unit.component";
import {ListComponent} from "./list/list.component";

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
export class PipesRoutingModule {
}
