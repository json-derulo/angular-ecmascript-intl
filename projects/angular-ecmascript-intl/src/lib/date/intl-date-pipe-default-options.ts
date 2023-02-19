import { InjectionToken } from "@angular/core";
import { IntlDatePipeOptions } from "./intl-date.pipe";

export const INTL_DATE_PIPE_DEFAULT_OPTIONS = new InjectionToken<IntlDatePipeOptions>('IntlDatePipeDefaultOptions');
