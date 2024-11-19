import { ChangeDetectorRef } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import dayjs from 'dayjs';
import { INTL_LOCALES } from '../locale';
import { INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS } from './relative-time-pipe-default-options';
import { IntlRelativeTimePipe } from './relative-time.pipe';

describe('RelativeTimePipe', () => {
  let testUnit: IntlRelativeTimePipe;

  it('should create an instance', () => {
    testUnit = new IntlRelativeTimePipe();
    expect(testUnit).toBeTruthy();
  });

  describe('parsing', () => {
    beforeEach(() => {
      testUnit = new IntlRelativeTimePipe('en-US');
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
        const date = dayjs().subtract(4, 'weeks').add(1, 'second').toDate();

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
      TestBed.configureTestingModule({
        providers: [
          IntlRelativeTimePipe,
          {
            provide: INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS,
            useValue: { numeric: 'auto', style: 'short' },
          },
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
        ],
      });
      testUnit = TestBed.inject(IntlRelativeTimePipe);
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

  it('should fall back to the default locale', () => {
    TestBed.configureTestingModule({ providers: [IntlRelativeTimePipe] });

    const result1 = TestBed.inject(IntlRelativeTimePipe).transform(new Date());
    const result2 = new IntlRelativeTimePipe(navigator.language).transform(
      new Date(),
    );

    expect(result1).toEqual(result2);
  });

  describe('timer', () => {
    const cdrMock = {
      markForCheck: jasmine.createSpy(),
    } as unknown as ChangeDetectorRef;

    beforeEach(() => {
      testUnit = new IntlRelativeTimePipe(null, null, cdrMock);
    });

    it('should mark for check once after 1 minute', fakeAsync(() => {
      testUnit.transform(0);
      tick(60000);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(cdrMock.markForCheck).toHaveBeenCalledTimes(1);

      testUnit.ngOnDestroy();
    }));

    it('should mark for check 10 times after 10 minutes', fakeAsync(() => {
      testUnit.transform(new Date());
      tick(600000);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(cdrMock.markForCheck).toHaveBeenCalledTimes(10);

      testUnit.ngOnDestroy();
    }));

    afterEach(() => {
      (cdrMock.markForCheck as jasmine.Spy).calls.reset();
    });
  });
});
