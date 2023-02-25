import {InjectionToken} from "@angular/core";
import {IntlListPipeOptions} from "./intl-list.pipe";

export const INTL_LIST_PIPE_DEFAULT_OPTIONS = new InjectionToken<Omit<IntlListPipeOptions, 'locale'>>('IntlListPipeDefaultOptions');
