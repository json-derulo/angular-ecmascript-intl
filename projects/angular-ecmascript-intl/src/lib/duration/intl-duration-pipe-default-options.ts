import { InjectionToken } from '@angular/core';
import { IntlDurationPipeOptions } from './intl-duration.pipe';

export const INTL_DURATION_PIPE_DEFAULT_OPTIONS = new InjectionToken<
  Omit<IntlDurationPipeOptions, 'locale'>
>('IntlDurationPipeDefaultOptions');
