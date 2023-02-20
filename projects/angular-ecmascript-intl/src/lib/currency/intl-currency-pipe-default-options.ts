import {InjectionToken} from "@angular/core";

export const INTL_CURRENCY_PIPE_DEFAULT_OPTIONS = new InjectionToken<Partial<Intl.NumberFormatOptions>>('IntlCurrencyPipeDefaultOptions');
