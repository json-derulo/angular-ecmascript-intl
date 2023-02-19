import { NgModule } from '@angular/core';
import { IntlDatePipe } from "./date/intl-date.pipe";

@NgModule({
  imports: [
    IntlDatePipe,
  ],
  exports: [
    IntlDatePipe,
  ],
})
export class IntlModule {
}
