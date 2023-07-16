import { InjectionToken } from '@angular/core';
import { IntlCountryPipeOptions } from './intl-country.pipe';

export const INTL_COUNTRY_PIPE_DEFAULT_OPTIONS = new InjectionToken<
  Omit<IntlCountryPipeOptions, 'locale'>
>('IntlCountryPipeDefaultOptions');
