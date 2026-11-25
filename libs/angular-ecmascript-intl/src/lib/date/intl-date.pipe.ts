import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlFormatOptions, IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { INTL_DATE_PIPE_DEFAULT_OPTIONS } from './intl-date-pipe-default-options';

export type IntlDatePipeOptions = Partial<Intl.DateTimeFormatOptions> &
  IntlPipeOptions;

@Pipe({
  name: 'intlDate',
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
    return intlFormatDate(value, {
      ...this.defaultOptions,
      ...options,
      locale: options?.locale ?? this.locale ?? undefined,
    });
  }
}

/**
 * Formats a date or time using localized formatting.
 *
 * @param value A Date, date string, or timestamp in milliseconds since the Unix epoch.
 * @param options Formatting options. The locale defaults to the runtime locale.
 * @returns The formatted value, or `null` if the input is absent or cannot be formatted.
 */
export function intlFormatDate(
  value: string | number | Date | null | undefined,
  options?: IntlFormatOptions<IntlDatePipeOptions>,
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
    return new Intl.DateTimeFormat(locale, intlOptions).format(date);
  } catch (e) {
    console.error('Error while transforming the date', e);
    return null;
  }
}
