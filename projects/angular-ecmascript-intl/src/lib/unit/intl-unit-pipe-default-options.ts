import {InjectionToken} from "@angular/core";
import {IntlUnitPipeOptions} from "./intl-unit.pipe";

export const INTL_UNIT_PIPE_DEFAULT_OPTIONS = new InjectionToken<Omit<IntlUnitPipeOptions, 'locale'>>('IntlUnitPipeDefaultOptions');
