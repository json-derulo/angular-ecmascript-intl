import {Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {INTL_LOCALES} from "../locale";
import {INTL_COUNTRY_PIPE_DEFAULT_OPTIONS} from "./intl-country-pipe-default-options";
import {IntlPipeOptions} from "../intl-pipe-options";

export type IntlCountryPipeOptions = Omit<Partial<Intl.DisplayNamesOptions>, 'languageDisplay'> & IntlPipeOptions;

@Pipe({
  name: 'intlCountry',
  standalone: true,
})
export class IntlCountryPipe implements PipeTransform {

  constructor(@Optional() @Inject(INTL_LOCALES) readonly locale?: string | string[] | null,
              @Optional() @Inject(INTL_COUNTRY_PIPE_DEFAULT_OPTIONS) readonly defaultOptions?: Omit<IntlCountryPipeOptions, 'locale'> | null) {
  }

  transform(value: string | null | undefined, options?: IntlCountryPipeOptions): string | null {
    if (!value) {
      return null;
    }

    const {locale, ...intlOptions} = options ?? {};

    try {
      return new Intl.DisplayNames(locale ?? this.locale ?? undefined, {
        ...this.defaultOptions, ...intlOptions,
        type: 'region',
      }).of(value) ?? null;
    } catch (e) {
      console.error('Error while transforming the country', e);
      return null;
    }
  }

}
