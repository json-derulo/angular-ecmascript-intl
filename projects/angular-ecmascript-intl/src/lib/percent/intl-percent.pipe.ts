import {Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {IntlPipeOptions} from "../intl-pipe-options";
import {INTL_LOCALES} from "../locale";
import {getNumericValue} from "../utils/number-utils";
import {INTL_PERCENT_PIPE_DEFAULT_OPTIONS} from "./intl-percent-pipe-default-options";

export type IntlPercentPipeOptions = Partial<Intl.NumberFormatOptions> & IntlPipeOptions;

@Pipe({
  name: 'intlPercent',
  standalone: true,
})
export class IntlPercentPipe implements PipeTransform {

  constructor(@Optional() @Inject(INTL_LOCALES) readonly locale?: string | string[] | null,
              @Optional() @Inject(INTL_PERCENT_PIPE_DEFAULT_OPTIONS) readonly defaultOptions?: Partial<Intl.NumberFormatOptions> | null) {
  }

  transform(value: number | string | null | undefined, options?: IntlPercentPipeOptions): string | null {
    if (typeof value !== 'number' && !value) {
      return null;
    }

    const numericValue = getNumericValue(value);

    const {locale, ...intlOptions} = options ?? {};

    try {
      return new Intl.NumberFormat(
        locale ?? this.locale ?? undefined,
        {...this.defaultOptions, ...intlOptions, style: 'percent'},
      ).format(numericValue);
    } catch (e) {
      console.error('Error while transforming the percent value', e);
      return null;
    }
  }

}
