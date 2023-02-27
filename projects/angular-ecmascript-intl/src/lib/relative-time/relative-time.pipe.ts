import {ChangeDetectorRef, Inject, OnDestroy, Optional, Pipe, PipeTransform} from '@angular/core';
import {INTL_LOCALES} from "../locale";
import {IntlPipeOptions} from "../intl-pipe-options";
import {INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS} from "./relative-time-pipe-default-options";
import {interval, Subject, takeUntil} from "rxjs";

export type IntlRelativeTimePipeOptions = Partial<Intl.RelativeTimeFormatOptions> & IntlPipeOptions;

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
  standalone: true,
  pure: false,
})
export class IntlRelativeTimePipe implements PipeTransform, OnDestroy {

  #destroy$?: Subject<void>;

  constructor(@Optional() @Inject(INTL_LOCALES) readonly locales?: string | string[] | null,
              @Optional() @Inject(INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS) readonly defaultOptions?: Omit<IntlRelativeTimePipeOptions, 'locale'> | null,
              @Optional() readonly cdr?: ChangeDetectorRef) {
  }

  transform(value: string | number | Date | null | undefined, options?: IntlRelativeTimePipeOptions): string | null {
    if (typeof value !== 'number' && !value) {
      return null;
    }

    const time = new Date(value).getTime();
    if (isNaN(time)) {
      throw new Error(`${value} is not a valid date`);
    }

    this.#destroy();
    this.#destroy$ = new Subject();
    interval(Time.oneMinute)
      .pipe(takeUntil(this.#destroy$))
      .subscribe(() => this.cdr?.markForCheck());

    const relativeTimeFormat = new Intl.RelativeTimeFormat(
      options?.locale ?? this.locales ?? undefined,
      {...this.defaultOptions, ...options},
    );

    const currentTime = new Date().getTime();
    const factor = time < currentTime ? -1 : 1;
    const diff = Math.abs(time - currentTime);
    if (diff > Time.oneYear) {
      return relativeTimeFormat.format(factor * Math.floor(diff / Time.oneYear), 'year');
    } else if (diff > Time.oneMonth) {
      return relativeTimeFormat.format(factor * Math.floor(diff / Time.oneMonth), 'month');
    } else if (diff > Time.oneWeek) {
      return relativeTimeFormat.format(factor * Math.floor(diff / Time.oneWeek), 'week');
    } else if (diff > Time.oneDay) {
      return relativeTimeFormat.format(factor * Math.floor(diff / Time.oneDay), 'day');
    } else if (diff > Time.oneHour) {
      return relativeTimeFormat.format(factor * Math.floor(diff / Time.oneHour), 'hour');
    } else if (diff > Time.oneMinute) {
      return relativeTimeFormat.format(factor * Math.floor(diff / Time.oneMinute), 'minute');
    } else {
      return relativeTimeFormat.format(0, 'minute');
    }
  }

  ngOnDestroy(): void {
    this.#destroy();
  }

  #destroy(): void {
    this.#destroy$?.next();
    this.#destroy$?.complete();
  }
}
