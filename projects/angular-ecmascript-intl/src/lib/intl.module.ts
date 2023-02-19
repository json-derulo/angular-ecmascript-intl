import {NgModule} from '@angular/core';
import {IntlDatePipe} from "./date/intl-date.pipe";
import {IntlLanguagePipe} from './language/intl-language.pipe';

@NgModule({
  imports: [
    IntlDatePipe,
    IntlLanguagePipe,
  ],
  exports: [
    IntlDatePipe,
    IntlLanguagePipe,
  ],
})
export class IntlModule {
}
