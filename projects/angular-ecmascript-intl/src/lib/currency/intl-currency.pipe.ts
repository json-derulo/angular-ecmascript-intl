import {Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {IntlPipeOptions} from "../intl-pipe-options";
import {INTL_LOCALES} from "../locale";
import {INTL_CURRENCY_PIPE_DEFAULT_OPTIONS} from "./intl-currency-pipe-default-options";
import {getNumericValue} from "../utils/number-utils";

type OmitOptions = 'unit' | 'unitDisplay' | 'currency';
export type IntlCurrencyPipeOptions = Omit<Partial<Intl.NumberFormatOptions>, OmitOptions> & IntlPipeOptions;

@Pipe({
  name: 'intlCurrency',
  standalone: true,
})
export class IntlCurrencyPipe implements PipeTransform {

  constructor(@Optional() @Inject(INTL_LOCALES) readonly locale?: string | string[] | null,
              @Optional() @Inject(INTL_CURRENCY_PIPE_DEFAULT_OPTIONS) readonly defaultOptions?: Omit<IntlCurrencyPipeOptions, 'locale'> | null) {
  }

  transform(value: number | string | null | undefined, currency: string, options?: IntlCurrencyPipeOptions): string | null {
    if (typeof value !== 'number' && !value) {
      return null;
    }

    const numericValue = getNumericValue(value);

    const {locale, ...intlOptions} = options ?? {};

    try {
      return new Intl.NumberFormat(
        locale ?? this.locale ?? undefined,
        {...this.defaultOptions, ...intlOptions, currency, style: 'currency'},
      ).format(numericValue);
    } catch (e) {
      console.error('Error while transforming the currency', e);
      return null;
    }
  }

}
