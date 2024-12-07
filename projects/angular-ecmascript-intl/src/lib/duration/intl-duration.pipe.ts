import { inject, Pipe, PipeTransform } from '@angular/core';
import { IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { INTL_DURATION_PIPE_DEFAULT_OPTIONS } from './intl-duration-pipe-default-options';

// ToDo: remove once TypeScript includes official typings
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Intl {
  export class DurationFormat {
    constructor(locale?: string[] | string, options?: DurationFormatOptions);

    format(duration: Duration): string;
  }

  export interface DurationFormatOptions {
    style?: DurationItemStyle | 'digital';
    years?: DurationItemStyle;
    yearsDisplay?: DurationItemDisplay;
    months?: DurationItemStyle;
    monthsDisplay?: DurationItemDisplay;
    weeks?: DurationItemStyle;
    weeksDisplay?: DurationItemDisplay;
    days?: DurationItemStyle;
    daysDisplay?: DurationItemDisplay;
    hours?: DurationItemStyle | 'numeric' | '2-digit';
    hoursDisplay?: DurationItemDisplay;
    minutes?: DurationItemStyle | 'numeric' | '2-digit';
    minutesDisplay?: DurationItemDisplay;
    seconds?: DurationItemStyle | 'numeric' | '2-digit';
    secondsDisplay?: DurationItemDisplay;
    milliseconds?: DurationItemStyle | 'numeric' | '2-digit';
    millisecondsDisplay?: DurationItemDisplay;
    microseconds?: DurationItemStyle | 'numeric';
    microsecondsDisplay?: DurationItemDisplay;
    nanoseconds?: DurationItemStyle | 'numeric';
    nanosecondsDisplay?: DurationItemDisplay;
    fractionalDigits?: number;
  }

  export type DurationItemStyle = 'long' | 'short' | 'narrow';
  export type DurationItemDisplay = 'always' | 'auto';

  export interface Duration {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
    microseconds?: number;
    nanoseconds?: number;
  }
}

export type IntlDurationPipeOptions = Partial<Intl.DurationFormatOptions> &
  IntlPipeOptions;

@Pipe({
  name: 'intlDuration',
  standalone: true,
})
export class IntlDurationPipe implements PipeTransform {
  readonly locale = inject(INTL_LOCALES, { optional: true });
  readonly defaultOptions = inject(INTL_DURATION_PIPE_DEFAULT_OPTIONS, {
    optional: true,
  });

  transform(
    value: Intl.Duration | null | undefined,
    options?: IntlDurationPipeOptions,
  ): string | null {
    if (!value) {
      return null;
    }

    const { locale, ...intlOptions } = options ?? {};

    try {
      return new Intl.DurationFormat(locale ?? this.locale ?? undefined, {
        ...this.defaultOptions,
        ...intlOptions,
      }).format(value);
    } catch (e) {
      console.error('Error while transforming the duration value', e);
      return null;
    }
  }
}
