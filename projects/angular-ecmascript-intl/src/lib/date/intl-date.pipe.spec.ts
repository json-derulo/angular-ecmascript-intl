import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { INTL_LOCALES } from '../locale';
import { INTL_DATE_PIPE_DEFAULT_OPTIONS } from './intl-date-pipe-default-options';
import { IntlDatePipe } from './intl-date.pipe';

describe('DatePipe', () => {
  let testUnit: IntlDatePipe;

  describe('date parsing', () => {
    beforeEach(() => {
      TestBed.runInInjectionContext(() => {
        testUnit = new IntlDatePipe();
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

    it('should handle empty strings', () => {
      expect(testUnit.transform('')).toBeNull();
    });

    it('should transform numbers', () => {
      expect(testUnit.transform(0)).toEqual('1/1/1970');
    });

    it('should transform UTC strings', () => {
      expect(testUnit.transform('Sun, 19 Feb 2023 11:13:52 GMT')).toEqual(
        '2/19/2023',
      );
    });

    it('should transform ISO strings', () => {
      expect(testUnit.transform('2023-02-19T11:13:52.682Z')).toEqual(
        '2/19/2023',
      );
    });

    it('should support Date objects', () => {
      expect(testUnit.transform(new Date('2023-02-19'))).toEqual('2/19/2023');
    });

    it('should handle invalid strings', () => {
      expect(testUnit.transform('invalid date')).toBeNull();
    });

    it('should handle invalid dates', () => {
      expect(testUnit.transform(new Date('invalid date'))).toBeNull();
    });

    it('should handle missing Intl.DateTimeFormat browser API', () => {
      // @ts-expect-error Intl APIs are not expected to be undefined
      vi.spyOn(Intl, 'DateTimeFormat').mockReturnValue(undefined);
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => null);

      expect(testUnit.transform('2023-02-19')).toBeNull();
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
      TestBed.runInInjectionContext(() => (testUnit = new IntlDatePipe()));

      expect(testUnit.transform('2023-02-19')).toEqual('19.2.2023');
    });

    it('should fall back to the browser default locale', () => {
      let defaultLanguageTestUnit!: IntlDatePipe;
      let browserLanguageTestUnit!: IntlDatePipe;

      TestBed.runInInjectionContext(() => {
        defaultLanguageTestUnit = new IntlDatePipe();
        browserLanguageTestUnit = new IntlDatePipe();
        Object.defineProperty(browserLanguageTestUnit, 'locale', {
          value: undefined,
        });
        Object.defineProperty(defaultLanguageTestUnit, 'locale', {
          value: navigator.language,
        });
      });

      const result1 = browserLanguageTestUnit.transform('2023-02-19');
      const result2 = defaultLanguageTestUnit.transform('2023-02-19');

      expect(result1).toEqual(result2);
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
            provide: INTL_DATE_PIPE_DEFAULT_OPTIONS,
            useValue: {
              dateStyle: 'medium',
            },
          },
        ],
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlDatePipe()));

      expect(testUnit.transform('2023-02-19')).toEqual('Feb 19, 2023');
    });

    it('should give the user options a higher priority', () => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
          {
            provide: INTL_DATE_PIPE_DEFAULT_OPTIONS,
            useValue: {
              dateStyle: 'full',
            },
          },
        ],
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlDatePipe()));

      expect(testUnit.transform('2023-02-19', { dateStyle: 'medium' })).toEqual(
        'Feb 19, 2023',
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
    TestBed.runInInjectionContext(() => (testUnit = new IntlDatePipe()));

    expect(testUnit.transform('2023-02-19', { locale: 'de-DE' })).toEqual(
      '19.2.2023',
    );
  });
});
