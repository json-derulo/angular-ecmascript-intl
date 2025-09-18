import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlPipeOptions } from '../intl-pipe-options';
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
  standalone: true,
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
    if (typeof value !== 'number' && !value) {
      return null;
    }

    const numericValue = getNumericValue(value);

    const { locale, ...intlOptions } = options ?? {};

    try {
      return new Intl.NumberFormat(locale ?? this.locale ?? undefined, {
        ...this.defaultOptions,
        ...intlOptions,
        style: 'decimal',
      }).format(numericValue);
    } catch (e) {
      console.error('Error while transforming the decimal number', e);
      return null;
    }
  }
}
