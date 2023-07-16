import { InjectionToken } from '@angular/core';
import { IntlPercentPipeOptions } from './intl-percent.pipe';

export const INTL_PERCENT_PIPE_DEFAULT_OPTIONS = new InjectionToken<
  Omit<IntlPercentPipeOptions, 'locale'>
>('IntlPercentPipeDefaultOptions');
