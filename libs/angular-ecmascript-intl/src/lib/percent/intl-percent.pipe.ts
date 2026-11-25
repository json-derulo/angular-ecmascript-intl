import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlFormatOptions, IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { getNumericValue } from '../utils/number-utils';
import { INTL_PERCENT_PIPE_DEFAULT_OPTIONS } from './intl-percent-pipe-default-options';

type OmitOptions =
  | 'unit'
  | 'unitDisplay'
  | 'currency'
  | 'currencyDisplay'
  | 'currencySign';
export type IntlPercentPipeOptions = Omit<
  Partial<Intl.NumberFormatOptions>,
  OmitOptions
> &
  IntlPipeOptions;

@Pipe({
  name: 'intlPercent',
})
export class IntlPercentPipe implements PipeTransform {
  private readonly locale? = inject(INTL_LOCALES, { optional: true });
  private readonly defaultOptions? = inject<Omit<
    IntlPercentPipeOptions,
    'locale'
  > | null>(INTL_PERCENT_PIPE_DEFAULT_OPTIONS, { optional: true });

  transform(
    value: number | string | null | undefined,
    options?: IntlPercentPipeOptions,
  ): string | null {
    return intlFormatPercent(value, {
      ...this.defaultOptions,
      ...options,
      locale: options?.locale ?? this.locale ?? undefined,
    });
  }
}

/**
 * Formats a proportion as a localized percentage.
 *
 * @param value A number or numeric string, where `0.25` represents 25%.
 * @param options Formatting options. The locale defaults to the runtime locale.
 * @returns The formatted value, or `null` if the input is absent or cannot be formatted.
 */
export function intlFormatPercent(
  value: number | string | null | undefined,
  options?: IntlFormatOptions<IntlPercentPipeOptions>,
): string | null {
  if (typeof value !== 'number' && !value) {
    return null;
  }

  const numericValue = getNumericValue(value);

  const { locale, ...intlOptions } = options ?? {};

  try {
    return new Intl.NumberFormat(locale, {
      ...intlOptions,
      style: 'percent',
    }).format(numericValue);
  } catch (e) {
    console.error('Error while transforming the percent value', e);
    return null;
  }
}
