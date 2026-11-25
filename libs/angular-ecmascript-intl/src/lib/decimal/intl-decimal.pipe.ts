import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlFormatOptions, IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { getNumericValue } from '../utils/number-utils';
import { INTL_DECIMAL_PIPE_DEFAULT_OPTIONS } from './intl-decimal-pipe-default-options';

type OmitOptions =
  | 'unit'
  | 'unitDisplay'
  | 'currency'
  | 'currencyDisplay'
  | 'currencySign';
export type IntlDecimalPipeOptions = Omit<
  Partial<Intl.NumberFormatOptions>,
  OmitOptions
> &
  IntlPipeOptions;

@Pipe({
  name: 'intlDecimal',
})
export class IntlDecimalPipe implements PipeTransform {
  private readonly locale? = inject(INTL_LOCALES, { optional: true });
  private readonly defaultOptions? = inject<Omit<
    IntlDecimalPipeOptions,
    'locale'
  > | null>(INTL_DECIMAL_PIPE_DEFAULT_OPTIONS, { optional: true });

  transform(
    value: number | string | null | undefined,
    options?: IntlDecimalPipeOptions,
  ): string | null {
    return intlFormatDecimal(value, {
      ...this.defaultOptions,
      ...options,
      locale: options?.locale ?? this.locale ?? undefined,
    });
  }
}

/**
 * Formats a localized decimal number.
 *
 * @param value A number or numeric string.
 * @param options Formatting options. The locale defaults to the runtime locale.
 * @returns The formatted value, or `null` if the input is absent or cannot be formatted.
 */
export function intlFormatDecimal(
  value: number | string | null | undefined,
  options?: IntlFormatOptions<IntlDecimalPipeOptions>,
): string | null {
  if (typeof value !== 'number' && !value) {
    return null;
  }

  const numericValue = getNumericValue(value);

  const { locale, ...intlOptions } = options ?? {};

  try {
    return new Intl.NumberFormat(locale, {
      ...intlOptions,
      style: 'decimal',
    }).format(numericValue);
  } catch (e) {
    console.error('Error while transforming the decimal number', e);
    return null;
  }
}
