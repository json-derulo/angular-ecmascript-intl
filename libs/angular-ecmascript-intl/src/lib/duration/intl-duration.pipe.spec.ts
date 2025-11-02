import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { INTL_LOCALES } from '../locale';
import { INTL_DURATION_PIPE_DEFAULT_OPTIONS } from './intl-duration-pipe-default-options';
import { IntlDurationPipe } from './intl-duration.pipe';

describe('IntlDurationPipe', () => {
  let testUnit: IntlDurationPipe;

  describe('parsing', () => {
    beforeEach(() => {
      TestBed.runInInjectionContext(() => {
        testUnit = new IntlDurationPipe();
        Object.defineProperty(testUnit, 'locale', { value: 'en-US' });
      });
    });

    it('should create an instance', () => {
      expect(testUnit).toBeTruthy();
    });

    it('should handle null values', () => {
      expect(testUnit.transform(null)).toBeNull();
    });

    it('should handle undefined values', () => {
      expect(testUnit.transform(undefined)).toBeNull();
    });

    it('should transform durations', () => {
      expect(
        testUnit.transform({
          years: 2,
          months: 11,
          weeks: 2,
          days: 1,
          hours: 0,
          minutes: 55,
          seconds: 19,
          milliseconds: 940,
          microseconds: 10,
          nanoseconds: 3,
        }),
      ).toEqual(
        '2 yrs, 11 mths, 2 wks, 1 day, 55 min, 19 sec, 940 ms, 10 μs, 3 ns',
      );
    });

    it('should handle missing Intl.NumberFormat browser API', () => {
      // @ts-expect-error Intl APIs are not yet part of the TS types
      vi.spyOn(Intl, 'DurationFormat').mockReturnValue(undefined);
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => null);
      expect(testUnit.transform({ years: 1 })).toBeNull();

      expect(consoleError).toHaveBeenCalledTimes(1);

      vi.restoreAllMocks();
    });
  });

  describe('internationalization', () => {
    it('should respect the set locale', () => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
        ],
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlDurationPipe()));

      expect(testUnit.transform({ years: 1 })).toEqual('1 J');
    });
  });

  describe('options', () => {
    it('should respect the setting from default config', () => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
          {
            provide: INTL_DURATION_PIPE_DEFAULT_OPTIONS,
            useValue: {
              style: 'long',
            },
          },
        ],
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlDurationPipe()));

      expect(testUnit.transform({ years: 1 })).toEqual('1 year');
    });

    it('should give the user options a higher priority', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlDurationPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
          {
            provide: INTL_DURATION_PIPE_DEFAULT_OPTIONS,
            useValue: {
              style: 'long',
            },
          },
        ],
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlDurationPipe()));

      expect(testUnit.transform({ years: 1 }, { style: 'narrow' })).toEqual(
        '1y',
      );
    });
  });

  it('should respect locale option', () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: INTL_LOCALES,
          useValue: 'en-US',
        },
      ],
    });
    TestBed.runInInjectionContext(() => (testUnit = new IntlDurationPipe()));

    expect(testUnit.transform({ years: 1 }, { locale: 'de-DE' })).toEqual(
      '1 J',
    );
  });
});
