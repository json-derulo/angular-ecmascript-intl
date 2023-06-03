import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateComponent} from "./date/date.component";
import {LanguageComponent} from "./language/language.component";
import {DecimalComponent} from "./decimal/decimal.component";
import {PercentComponent} from "./percent/percent.component";
import {CurrencyComponent} from "./currency/currency.component";
import {PipesComponent} from './pipes.component';
import {MatTabsModule} from "@angular/material/tabs";
import {IntlModule} from "projects/angular-ecmascript-intl/src/lib/intl.module";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {PipesRoutingModule} from "./pipes-routing.module";
import {CountryComponent} from "./country/country.component";
import {UnitComponent} from "./unit/unit.component";
import {ListComponent} from "./list/list.component";
import {RelativeTimeComponent} from './relative-time/relative-time.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DateComponent,
    LanguageComponent,
    DecimalComponent,
    PercentComponent,
    CurrencyComponent,
    PipesComponent,
    CountryComponent,
    UnitComponent,
    ListComponent,
    RelativeTimeComponent,
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    MatTabsModule,
    IntlModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class PipesModule {
}
