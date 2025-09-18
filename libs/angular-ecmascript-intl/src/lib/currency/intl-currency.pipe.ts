import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { getNumericValue } from '../utils/number-utils';
import { INTL_CURRENCY_PIPE_DEFAULT_OPTIONS } from './intl-currency-pipe-default-options';

type OmitOptions = 'unit' | 'unitDisplay' | 'currency';
export type IntlCurrencyPipeOptions = Omit<
  Partial<Intl.NumberFormatOptions>,
  OmitOptions
> &
  IntlPipeOptions;

@Pipe({
  name: 'intlCurrency',
  standalone: true,
})
export class IntlCurrencyPipe implements PipeTransform {
  private readonly locale? = inject(INTL_LOCALES, { optional: true });
  private readonly defaultOptions? = inject<Omit<
    IntlCurrencyPipeOptions,
    'locale'
  > | null>(INTL_CURRENCY_PIPE_DEFAULT_OPTIONS, { optional: true });

  transform(
    value: number | string | null | undefined,
    currency: string,
    options?: IntlCurrencyPipeOptions,
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
        currency,
        style: 'currency',
      }).format(numericValue);
    } catch (e) {
      console.error('Error while transforming the currency', e);
      return null;
    }
  }
}
