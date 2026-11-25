import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlFormatOptions, IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { INTL_COUNTRY_PIPE_DEFAULT_OPTIONS } from './intl-country-pipe-default-options';

export type IntlCountryPipeOptions = Omit<
  Partial<Intl.DisplayNamesOptions>,
  'languageDisplay'
> &
  IntlPipeOptions;

@Pipe({
  name: 'intlCountry',
})
export class IntlCountryPipe implements PipeTransform {
  private readonly locale? = inject(INTL_LOCALES, { optional: true });
  private readonly defaultOptions? = inject<Omit<
    IntlCountryPipeOptions,
    'locale'
  > | null>(INTL_COUNTRY_PIPE_DEFAULT_OPTIONS, { optional: true });

  transform(
    value: string | null | undefined,
    options?: IntlCountryPipeOptions,
  ): string | null {
    return intlFormatCountry(value, {
      ...this.defaultOptions,
      ...options,
      locale: options?.locale ?? this.locale ?? undefined,
    });
  }
}

/**
 * Formats a region code as a localized country or region name.
 *
 * @param value A region code such as `US`.
 * @param options Formatting options. The locale defaults to the runtime locale.
 * @returns The formatted value, or `null` if the input is absent or cannot be formatted.
 */
export function intlFormatCountry(
  value: string | null | undefined,
  options?: IntlFormatOptions<IntlCountryPipeOptions>,
): string | null {
  if (!value) {
    return null;
  }

  const { locale, ...intlOptions } = options ?? {};

  try {
    return (
      new Intl.DisplayNames(locale, {
        ...intlOptions,
        type: 'region',
      }).of(value) ?? null
    );
  } catch (e) {
    console.error('Error while transforming the country', e);
    return null;
  }
}
