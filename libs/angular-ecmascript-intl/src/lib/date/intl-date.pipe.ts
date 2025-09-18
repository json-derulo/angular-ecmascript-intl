import { Pipe, PipeTransform, inject } from '@angular/core';
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
  private readonly locale? = inject(INTL_LOCALES, { optional: true });
  private readonly defaultOptions? = inject<Omit<
    IntlDatePipeOptions,
    'locale'
  > | null>(INTL_DATE_PIPE_DEFAULT_OPTIONS, { optional: true });

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
