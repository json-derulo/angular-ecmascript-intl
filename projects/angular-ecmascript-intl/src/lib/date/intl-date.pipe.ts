import { Inject, Optional, Pipe, PipeTransform } from '@angular/core';
import { IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { INTL_DATE_PIPE_DEFAULT_OPTIONS } from './intl-date-pipe-default-options';

export type IntlDatePipeOptions = Partial<Intl.DateTimeFormatOptions> &
  IntlPipeOptions;

@Pipe({
  name: 'intlDate',
  standalone: true,
})
export class IntlDatePipe implements PipeTransform {
  constructor(
    @Optional()
    @Inject(INTL_LOCALES)
    readonly locale?: string | string[] | null,
    @Optional()
    @Inject(INTL_DATE_PIPE_DEFAULT_OPTIONS)
    readonly defaultOptions?: Omit<IntlDatePipeOptions, 'locale'> | null,
  ) {}

  transform(
    value: string | number | Date | null | undefined,
    options?: IntlDatePipeOptions,
  ): string | null {
    if (typeof value !== 'number' && !value) {
      return null;
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return null;
    }

    const { locale, ...intlOptions } = options ?? {};

    try {
      return new Intl.DateTimeFormat(locale ?? this.locale ?? undefined, {
        ...this.defaultOptions,
        ...intlOptions,
      }).format(date);
    } catch (e) {
      console.error('Error while transforming the date', e);
      return null;
    }
  }
}
