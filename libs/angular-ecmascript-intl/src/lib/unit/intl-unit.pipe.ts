import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlFormatOptions, IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { getNumericValue } from '../utils/number-utils';
import { INTL_UNIT_PIPE_DEFAULT_OPTIONS } from './intl-unit-pipe-default-options';

type OmitOptions = 'unit' | 'currency' | 'currencyDisplay' | 'currencySign';
export type IntlUnitPipeOptions = Omit<
  Partial<Intl.NumberFormatOptions>,
  OmitOptions
> &
  IntlPipeOptions;

@Pipe({
  name: 'intlUnit',
})
export class IntlUnitPipe implements PipeTransform {
  private readonly locale? = inject(INTL_LOCALES, { optional: true });
  private readonly defaultOptions? = inject<Omit<
    IntlUnitPipeOptions,
    'locale'
  > | null>(INTL_UNIT_PIPE_DEFAULT_OPTIONS, { optional: true });

  transform(
    value: number | string | null | undefined,
    unit: string | undefined,
    options?: IntlUnitPipeOptions,
  ): string | null {
    return intlFormatUnit(value, unit, {
      ...this.defaultOptions,
      ...options,
      locale: options?.locale ?? this.locale ?? undefined,
    });
  }
}

/**
 * Formats a number with a localized measurement unit.
 *
 * @param value A number or numeric string.
 * @param unit An Intl unit identifier such as `liter` or `kilometer-per-hour`.
 * @param options Formatting options. The locale defaults to the runtime locale.
 * @returns The formatted value, or `null` if the input is absent or cannot be formatted.
 */
export function intlFormatUnit(
  value: number | string | null | undefined,
  unit: string | undefined,
  options?: IntlFormatOptions<IntlUnitPipeOptions>,
): string | null {
  if (typeof value !== 'number' && !value) {
    return null;
  }

  const numericValue = getNumericValue(value);

  const { locale, ...intlOptions } = options ?? {};

  try {
    return new Intl.NumberFormat(locale, {
      ...intlOptions,
      unit,
      style: 'unit',
    }).format(numericValue);
  } catch (e) {
    console.error('Error while transforming the unit value', e);
    return null;
  }
}
