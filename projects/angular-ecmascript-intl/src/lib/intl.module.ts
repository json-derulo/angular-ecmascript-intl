import {NgModule} from '@angular/core';
import {IntlDatePipe} from "./date/intl-date.pipe";
import {IntlLanguagePipe} from './language/intl-language.pipe';
import {IntlDecimalPipe} from "./decimal/intl-decimal.pipe";
import {IntlPercentPipe} from "./percent/intl-percent.pipe";
import {IntlCurrencyPipe} from "./currency/intl-currency.pipe";

@NgModule({
  imports: [
    IntlDatePipe,
    IntlLanguagePipe,
    IntlDecimalPipe,
    IntlPercentPipe,
    IntlCurrencyPipe,
  ],
  exports: [
    IntlDatePipe,
    IntlLanguagePipe,
    IntlDecimalPipe,
    IntlPercentPipe,
    IntlCurrencyPipe,
  ],
})
export class IntlModule {
}
