import {Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {IntlPipeOptions} from "../intl-pipe-options";
import {INTL_LOCALES} from "../locale";
import {INTL_DECIMAL_PIPE_DEFAULT_OPTIONS} from "./intl-decimal-pipe-default-options";
import {getNumericValue} from "../utils/number-utils";

export type IntlDecimalPipeOptions = Partial<Intl.NumberFormatOptions> & IntlPipeOptions;

@Pipe({
  name: 'intlDecimal',
  standalone: true,
})
export class IntlDecimalPipe implements PipeTransform {

  constructor(@Optional() @Inject(INTL_LOCALES) readonly locale?: string | string[] | null,
              @Optional() @Inject(INTL_DECIMAL_PIPE_DEFAULT_OPTIONS) readonly defaultOptions?: Partial<Intl.NumberFormatOptions> | null) {
  }

  transform(value: number | string | null | undefined, options?: IntlDecimalPipeOptions): string | null {
    if (typeof value !== 'number' && !value) {
      return null;
    }

    const numericValue = getNumericValue(value);

    const {locale, ...intlOptions} = options ?? {};

    try {
      return new Intl.NumberFormat(
        locale ?? this.locale ?? undefined,
        {...this.defaultOptions, ...intlOptions, style: 'decimal'},
      ).format(numericValue);
    } catch (e) {
      console.error('Error while transforming the decimal number', e);
      return null;
    }
  }

}
