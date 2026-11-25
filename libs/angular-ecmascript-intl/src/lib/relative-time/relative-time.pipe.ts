import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform,
  inject,
} from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import { IntlFormatOptions, IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS } from './relative-time-pipe-default-options';

export type IntlRelativeTimePipeOptions =
  Partial<Intl.RelativeTimeFormatOptions> & IntlPipeOptions;

enum Time {
  oneSecond = 1000,
  oneMinute = Time.oneSecond * 60,
  oneHour = Time.oneMinute * 60,
  oneDay = Time.oneHour * 24,
  oneWeek = Time.oneDay * 7,
  oneMonth = Time.oneDay * 30,
  oneYear = Time.oneDay * 365,
}

@Pipe({
  name: 'intlRelativeTime',
  pure: false,
})
export class IntlRelativeTimePipe implements PipeTransform, OnDestroy {
  readonly cdr = inject(ChangeDetectorRef, { optional: true });
  private readonly locales? = inject(INTL_LOCALES, { optional: true });
  private readonly defaultOptions? = inject<Omit<
    IntlRelativeTimePipeOptions,
    'locale'
  > | null>(INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS, { optional: true });

  #destroy$?: Subject<void>;

  transform(
    value: string | number | Date | null | undefined,
    options?: IntlRelativeTimePipeOptions,
  ): string | null {
    const time = getTimestamp(value);
    if (time === null) {
      return null;
    }

    this.#destroy();
    this.#destroy$ = new Subject();
    interval(Time.oneMinute)
      .pipe(takeUntil(this.#destroy$))
      .subscribe(() => this.cdr?.markForCheck());

    return formatTimestamp(time, {
      ...this.defaultOptions,
      ...options,
      locale: options?.locale ?? this.locales ?? undefined,
    });
  }

  ngOnDestroy(): void {
    this.#destroy();
  }

  #destroy(): void {
    this.#destroy$?.next();
    this.#destroy$?.complete();
  }
}

/**
 * Formats a date relative to the current time at the moment of the call.
 *
 * @param value A Date, date string, or timestamp in milliseconds since the Unix epoch.
 * @param options Formatting options. The locale defaults to the runtime locale.
 * @returns The formatted value, or `null` if the input is absent.
 * @throws If the supplied date is invalid or Intl rejects the options.
 */
export function intlFormatRelativeTime(
  value: string | number | Date | null | undefined,
  options?: IntlFormatOptions<IntlRelativeTimePipeOptions>,
): string | null {
  const time = getTimestamp(value);
  return time === null ? null : formatTimestamp(time, options);
}

function getTimestamp(
  value: string | number | Date | null | undefined,
): number | null {
  if (typeof value !== 'number' && !value) {
    return null;
  }

  const time = new Date(value).getTime();
  if (isNaN(time)) {
    throw new Error(`${value.toString()} is not a valid date`);
  }
  return time;
}

function formatTimestamp(
  time: number,
  options?: IntlFormatOptions<IntlRelativeTimePipeOptions>,
): string {
  const { locale, ...intlOptions } = options ?? {};
  const relativeTimeFormat = new Intl.RelativeTimeFormat(locale, intlOptions);
  const currentTime = new Date().getTime();
  const factor = time < currentTime ? -1 : 1;
  const diff = Math.abs(time - currentTime);
  if (diff > (Time.oneYear as number)) {
    return relativeTimeFormat.format(
      factor * Math.floor(diff / Time.oneYear),
      'year',
    );
  } else if (diff > (Time.oneMonth as number)) {
    return relativeTimeFormat.format(
      factor * Math.floor(diff / Time.oneMonth),
      'month',
    );
  } else if (diff > (Time.oneWeek as number)) {
    return relativeTimeFormat.format(
      factor * Math.floor(diff / Time.oneWeek),
      'week',
    );
  } else if (diff > (Time.oneDay as number)) {
    return relativeTimeFormat.format(
      factor * Math.floor(diff / Time.oneDay),
      'day',
    );
  } else if (diff > (Time.oneHour as number)) {
    return relativeTimeFormat.format(
      factor * Math.floor(diff / Time.oneHour),
      'hour',
    );
  } else if (diff > (Time.oneMinute as number)) {
    return relativeTimeFormat.format(
      factor * Math.floor(diff / Time.oneMinute),
      'minute',
    );
  } else {
    return relativeTimeFormat.format(0, 'minute');
  }
}
