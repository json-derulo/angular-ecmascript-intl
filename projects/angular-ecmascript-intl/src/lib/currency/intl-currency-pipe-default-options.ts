import { InjectionToken } from '@angular/core';
import { IntlCurrencyPipeOptions } from './intl-currency.pipe';

export const INTL_CURRENCY_PIPE_DEFAULT_OPTIONS = new InjectionToken<
  Omit<IntlCurrencyPipeOptions, 'locale'>
>('IntlCurrencyPipeDefaultOptions');
