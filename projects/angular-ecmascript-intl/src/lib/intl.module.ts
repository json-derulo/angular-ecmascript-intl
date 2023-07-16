import { NgModule } from '@angular/core';
import { IntlDatePipe } from './date/intl-date.pipe';
import { IntlLanguagePipe } from './language/intl-language.pipe';
import { IntlDecimalPipe } from './decimal/intl-decimal.pipe';
import { IntlPercentPipe } from './percent/intl-percent.pipe';
import { IntlCurrencyPipe } from './currency/intl-currency.pipe';
import { IntlCountryPipe } from './country/intl-country.pipe';
import { IntlUnitPipe } from './unit/intl-unit.pipe';
import { IntlListPipe } from './list/intl-list.pipe';
import { IntlRelativeTimePipe } from './relative-time/relative-time.pipe';

@NgModule({
  imports: [
    IntlDatePipe,
    IntlLanguagePipe,
    IntlDecimalPipe,
    IntlPercentPipe,
    IntlCurrencyPipe,
    IntlCountryPipe,
    IntlUnitPipe,
    IntlListPipe,
    IntlRelativeTimePipe,
  ],
  exports: [
    IntlDatePipe,
    IntlLanguagePipe,
    IntlDecimalPipe,
    IntlPercentPipe,
    IntlCurrencyPipe,
    IntlCountryPipe,
    IntlUnitPipe,
    IntlListPipe,
    IntlRelativeTimePipe,
  ],
})
export class IntlModule {}
