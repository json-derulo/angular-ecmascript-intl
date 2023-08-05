import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { IntlModule } from 'projects/angular-ecmascript-intl/src/lib/intl.module';
import { CountryComponent } from './country/country.component';
import { CurrencyComponent } from './currency/currency.component';
import { DateComponent } from './date/date.component';
import { DecimalComponent } from './decimal/decimal.component';
import { LanguageComponent } from './language/language.component';
import { ListComponent } from './list/list.component';
import { PercentComponent } from './percent/percent.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { RelativeTimeComponent } from './relative-time/relative-time.component';
import { UnitComponent } from './unit/unit.component';

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
export class PipesModule {}
