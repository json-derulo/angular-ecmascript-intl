import { NgModule } from '@angular/core';
import { IntlCountryPipe } from './country/intl-country.pipe';
import { IntlCurrencyPipe } from './currency/intl-currency.pipe';
import { IntlDatePipe } from './date/intl-date.pipe';
import { IntlDecimalPipe } from './decimal/intl-decimal.pipe';
import { IntlDurationPipe } from './duration/intl-duration.pipe';
import { IntlLanguagePipe } from './language/intl-language.pipe';
import { IntlListPipe } from './list/intl-list.pipe';
import { IntlPercentPipe } from './percent/intl-percent.pipe';
import { IntlRelativeTimePipe } from './relative-time/relative-time.pipe';
import { IntlUnitPipe } from './unit/intl-unit.pipe';

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
    IntlDurationPipe,
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
    IntlDurationPipe,
  ],
})
export class IntlModule {}
