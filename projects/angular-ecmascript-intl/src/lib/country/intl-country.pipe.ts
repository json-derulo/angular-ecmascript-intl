import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { INTL_COUNTRY_PIPE_DEFAULT_OPTIONS } from './intl-country-pipe-default-options';

export type IntlCountryPipeOptions = Omit<
  Partial<Intl.DisplayNamesOptions>,
  'languageDisplay'
> &
  IntlPipeOptions;

@Pipe({
  name: 'intlCountry',
  standalone: true,
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
    if (!value) {
      return null;
    }

    const { locale, ...intlOptions } = options ?? {};

    try {
      return (
        new Intl.DisplayNames(locale ?? this.locale ?? undefined, {
          ...this.defaultOptions,
          ...intlOptions,
          type: 'region',
        }).of(value) ?? null
      );
    } catch (e) {
      console.error('Error while transforming the country', e);
      return null;
    }
  }
}
