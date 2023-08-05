import { TestBed } from '@angular/core/testing';
import { INTL_LOCALES } from '../locale';
import { INTL_DATE_PIPE_DEFAULT_OPTIONS } from './intl-date-pipe-default-options';
import { IntlDatePipe } from './intl-date.pipe';

describe('DatePipe', () => {
  let testUnit: IntlDatePipe;

  describe('date parsing', () => {
    beforeEach(() => {
      testUnit = new IntlDatePipe('en-US');
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
      spyOn(Intl, 'DateTimeFormat').and.returnValue(undefined);
      const consoleError = spyOn(console, 'error');

      expect(testUnit.transform('2023-02-19')).toBeNull();
      expect(consoleError).toHaveBeenCalledTimes(1);
    });
  });

  describe('internationalization', () => {
    it('should respect the set locale', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlDatePipe,
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
        ],
      });
      testUnit = TestBed.inject(IntlDatePipe);

      expect(testUnit.transform('2023-02-19')).toEqual('19.2.2023');
    });

    it('should fall back to the browser default locale', () => {
      TestBed.configureTestingModule({ providers: [IntlDatePipe] });

      const result1 = TestBed.inject(IntlDatePipe).transform('2023-02-19');
      const result2 = new IntlDatePipe(navigator.language).transform(
        '2023-02-19',
      );

      expect(result1).toEqual(result2);
    });
  });

  describe('options', () => {
    it('should respect the setting from default config', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlDatePipe,
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
      testUnit = TestBed.inject(IntlDatePipe);

      expect(testUnit.transform('2023-02-19')).toEqual('Feb 19, 2023');
    });

    it('should give the user options a higher priority', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlDatePipe,
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
      testUnit = TestBed.inject(IntlDatePipe);

      expect(testUnit.transform('2023-02-19', { dateStyle: 'medium' })).toEqual(
        'Feb 19, 2023',
      );
    });
  });

  it('should respect locale option', () => {
    TestBed.configureTestingModule({
      providers: [
        IntlDatePipe,
        {
          provide: INTL_LOCALES,
          useValue: 'en-US',
        },
      ],
    });
    testUnit = TestBed.inject(IntlDatePipe);

    expect(testUnit.transform('2023-02-19', { locale: 'de-DE' })).toEqual(
      '19.2.2023',
    );
  });
});
