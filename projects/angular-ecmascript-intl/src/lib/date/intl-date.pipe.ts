import { Inject, Optional, Pipe, PipeTransform } from '@angular/core';
import { INTL_LOCALES } from "../locale";
import { INTL_DATE_PIPE_DEFAULT_OPTIONS } from "./intl-date-pipe-default-options";

export type IntlDatePipeOptions = Partial<Intl.DateTimeFormatOptions>;

@Pipe({
  name: 'intlDate',
  standalone: true,
})
export class IntlDatePipe implements PipeTransform {

  constructor(@Optional() @Inject(INTL_LOCALES) readonly locale?: string | string[] | null,
              @Optional() @Inject(INTL_DATE_PIPE_DEFAULT_OPTIONS) readonly defaultOptions?: IntlDatePipeOptions | null) {
  }

  transform(value: string | number | Date | null | undefined, options?: IntlDatePipeOptions): string | null {
    if (typeof value !== 'number' && !value) {
      return null;
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return null;
    }

    try {
      return new Intl.DateTimeFormat(this.locale ?? undefined, { ...this.defaultOptions, ...options }).format(date);
    } catch (e) {
      console.warn('Error while parsing the date', e);
      return date.toString();
    }
  }

}
