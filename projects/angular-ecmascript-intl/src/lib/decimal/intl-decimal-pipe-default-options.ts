import {InjectionToken} from "@angular/core";
import {IntlDecimalPipeOptions} from "./intl-decimal.pipe";

export const INTL_DECIMAL_PIPE_DEFAULT_OPTIONS = new InjectionToken<Omit<IntlDecimalPipeOptions, 'locale'>>('IntlDecimalPipeDefaultOptions');
