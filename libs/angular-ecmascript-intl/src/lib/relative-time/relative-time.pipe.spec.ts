import { TestBed } from '@angular/core/testing';
import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { INTL_LOCALES } from '../locale';
import { INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS } from './relative-time-pipe-default-options';
import { IntlRelativeTimePipe } from './relative-time.pipe';

describe('RelativeTimePipe', () => {
  let testUnit: IntlRelativeTimePipe;

  beforeEach(() => TestBed.resetTestingModule());

  it('should create an instance', () => {
    TestBed.runInInjectionContext(
      () => (testUnit = new IntlRelativeTimePipe()),
    );
    expect(testUnit).toBeTruthy();
  });

  describe('parsing', () => {
    beforeEach(() => {
      TestBed.runInInjectionContext(() => {
        testUnit = new IntlRelativeTimePipe();
        Object.defineProperty(testUnit, 'locales', { value: 'en-US' });
      });
    });

    it('should handle null values', () => {
      expect(testUnit.transform(null)).toEqual(null);
    });

    it('should handle undefined values', () => {
      expect(testUnit.transform(undefined)).toEqual(null);
    });

    it('should handle empty strings', () => {
      expect(testUnit.transform('')).toEqual(null);
    });

    it('should throw an error when an invalid string is passed', () => {
      expect(() => testUnit.transform('someInvalidDate')).toThrowError(
        'someInvalidDate is not a valid date',
      );
    });

    it('should throw an error when an invalid date is passed', () => {
      expect(() => testUnit.transform(new Date('invalid'))).toThrowError(
        'Invalid Date is not a valid date',
      );
    });

    it('should support string value', () => {
      expect(testUnit.transform(new Date().toISOString())).toEqual(
        'in 0 minutes',
      );
    });

    it('should support number value', () => {
      expect(testUnit.transform(new Date().getTime())).toEqual('in 0 minutes');
    });

    it('should support Date value', () => {
      expect(testUnit.transform(new Date())).toEqual('in 0 minutes');
    });

    describe('years', () => {
      it('should transform a date one year in past', () => {
        const date = dayjs().subtract(1, 'year').subtract(1, 'second').toDate();

        expect(testUnit.transform(date)).toEqual('1 year ago');
      });

      it('should transform a date almost 3 years in future', () => {
        const date = dayjs()
          .add(365 * 3, 'days')
          .subtract(1, 'second')
          .toDate();

        expect(testUnit.transform(date)).toEqual('in 2 years');
      });
    });

    describe('months', () => {
      it('should transform a date 1 month in future', () => {
        const date = dayjs().add(31, 'days').add(1, 'second').toDate();

        expect(testUnit.transform(date)).toEqual('in 1 month');
      });

      it('should transform a date almost 12 months in past', () => {
        const date = dayjs()
          .subtract(30 * 12, 'days')
          .add(1, 'second')
          .toDate();

        expect(testUnit.transform(date)).toEqual('11 months ago');
      });
    });

    describe('weeks', () => {
      it('should transform a date 1 week in future', () => {
        const date = dayjs().add(1, 'week').add(1, 'second').toDate();

        expect(testUnit.transform(date)).toEqual('in 1 week');
      });

      it('should transform a date almost 4 weeks in past', () => {
        const date = dayjs().subtract(4, 'weeks').add(1, 'day').toDate();

        expect(testUnit.transform(date)).toEqual('3 weeks ago');
      });
    });

    describe('days', () => {
      it('should transform a date 1 day in future', () => {
        const date = dayjs().add(1, 'day').add(1, 'second').toDate();

        expect(testUnit.transform(date)).toEqual('in 1 day');
      });

      it('should transform a date almost 7 days in past', () => {
        const date = dayjs().subtract(7, 'days').add(1, 'second').toDate();

        expect(testUnit.transform(date)).toEqual('6 days ago');
      });
    });

    describe('hours', () => {
      it('should transform a date 1 hour in future', () => {
        const date = dayjs().add(1, 'hour').add(1, 'second').toDate();

        expect(testUnit.transform(date)).toEqual('in 1 hour');
      });

      it('should transform a date almost 24 hours in past', () => {
        const date = dayjs().subtract(24, 'hours').add(1, 'second').toDate();

        expect(testUnit.transform(date)).toEqual('23 hours ago');
      });
    });

    describe('minutes', () => {
      it('should transform a date 1 minute in future', () => {
        const date = dayjs().add(1, 'minute').add(1, 'second').toDate();

        expect(testUnit.transform(date)).toEqual('in 1 minute');
      });

      it('should transform a date almost 59 minutes in past', () => {
        const date = dayjs().subtract(60, 'minutes').add(1, 'second').toDate();

        expect(testUnit.transform(date)).toEqual('59 minutes ago');
      });
    });

    it('should transform a date almost than 1 minute in past', () => {
      const date = dayjs().subtract(1, 'minute').add(1, 'second').toDate();

      expect(testUnit.transform(date)).toEqual('in 0 minutes');
    });
  });

  describe('options', () => {
    beforeEach(() => {
      TestBed.overrideProvider(INTL_LOCALES, { useValue: 'en-US' });
      TestBed.overrideProvider(INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS, {
        useValue: { numeric: 'auto', style: 'short' },
      });
      TestBed.runInInjectionContext(
        () => (testUnit = new IntlRelativeTimePipe()),
      );
    });

    it('should respect the default options', () => {
      expect(testUnit.transform(new Date())).toEqual('this minute');
    });

    it('should give the passed options a higher priority', () => {
      expect(testUnit.transform(new Date(), { numeric: 'always' })).toEqual(
        'in 0 min.',
      );
    });

    it('should apply the locale from the passed options', () => {
      expect(testUnit.transform(new Date(), { locale: 'de-DE' })).toEqual(
        'in dieser Minute',
      );
    });
  });

  describe('timer', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      TestBed.runInInjectionContext(() => {
        testUnit = new IntlRelativeTimePipe();
        Object.defineProperty(testUnit, 'cdr', {
          value: { markForCheck: () => null },
        });
      });
    });

    afterEach(() => {
      testUnit.ngOnDestroy();
      vi.restoreAllMocks();
    });

    it('should mark for check once after 1 minute', () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const spy = vi.spyOn(testUnit.cdr!, 'markForCheck');
      testUnit.transform(0);
      vi.advanceTimersByTime(60000);

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should mark for check 10 times after 10 minutes', () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const spy = vi.spyOn(testUnit.cdr!, 'markForCheck');
      testUnit.transform(new Date());
      vi.advanceTimersByTime(600000);

      expect(spy).toHaveBeenCalledTimes(10);
    });
  });
});
