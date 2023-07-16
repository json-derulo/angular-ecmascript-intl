import { InjectionToken } from '@angular/core';
import { IntlRelativeTimePipeOptions } from './relative-time.pipe';

export const INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS = new InjectionToken<
  Omit<IntlRelativeTimePipeOptions, 'locale'>
>('IntlRelativeTimePipeDefaultOptions');
