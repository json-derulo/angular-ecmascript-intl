import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlPipeOptions } from '../intl-pipe-options';
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
  standalone: true,
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
    if (typeof value !== 'number' && !value) {
      return null;
    }

    const numericValue = getNumericValue(value);

    const { locale, ...intlOptions } = options ?? {};

    try {
      return new Intl.NumberFormat(locale ?? this.locale ?? undefined, {
        ...this.defaultOptions,
        ...intlOptions,
        unit,
        style: 'unit',
      }).format(numericValue);
    } catch (e) {
      console.error('Error while transforming the unit value', e);
      return null;
    }
  }
}
