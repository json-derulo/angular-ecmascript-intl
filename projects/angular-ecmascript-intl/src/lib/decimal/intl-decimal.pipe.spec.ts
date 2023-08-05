import { TestBed } from '@angular/core/testing';
import { INTL_LOCALES } from '../locale';
import { INTL_DECIMAL_PIPE_DEFAULT_OPTIONS } from './intl-decimal-pipe-default-options';
import { IntlDecimalPipe } from './intl-decimal.pipe';

describe('IntlDecimalPipe', () => {
  let testUnit: IntlDecimalPipe;

  describe('parsing', () => {
    beforeEach(() => {
      testUnit = new IntlDecimalPipe('en-US');
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
      expect(testUnit.transform(1024.2249)).toEqual('1,024.225');
    });

    it('should transform strings', () => {
      expect(testUnit.transform('1024.2249')).toEqual('1,024.225');
    });

    it('should handle invalid strings', () => {
      expect(() => testUnit.transform('invalid number')).toThrow();
    });

    it('should handle missing Intl.NumberFormat browser API', () => {
      // @ts-expect-error Intl APIs are not expected to be undefined
      spyOn(Intl, 'NumberFormat').and.returnValue(undefined);
      const consoleError = spyOn(console, 'error');
      expect(testUnit.transform('1')).toBeNull();

      expect(consoleError).toHaveBeenCalledTimes(1);
    });
  });

  describe('internationalization', () => {
    it('should respect the set locale', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlDecimalPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
        ],
      });
      testUnit = TestBed.inject(IntlDecimalPipe);

      expect(testUnit.transform(1024.2249)).toEqual('1.024,225');
    });

    it('should fall back to the browser default locale', () => {
      TestBed.configureTestingModule({ providers: [IntlDecimalPipe] });

      const result1 = TestBed.inject(IntlDecimalPipe).transform(1024.2249);
      const result2 = new IntlDecimalPipe(navigator.language).transform(
        1024.2249,
      );

      expect(result1).toEqual(result2);
    });
  });

  describe('options', () => {
    it('should respect the setting from default config', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlDecimalPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
          {
            provide: INTL_DECIMAL_PIPE_DEFAULT_OPTIONS,
            useValue: {
              signDisplay: 'always',
            },
          },
        ],
      });
      testUnit = TestBed.inject(IntlDecimalPipe);

      expect(testUnit.transform(1)).toEqual('+1');
    });

    it('should give the user options a higher priority', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlDecimalPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
          {
            provide: INTL_DECIMAL_PIPE_DEFAULT_OPTIONS,
            useValue: {
              signDisplay: 'exceptZero',
            },
          },
        ],
      });
      testUnit = TestBed.inject(IntlDecimalPipe);

      expect(testUnit.transform(1, { signDisplay: 'never' })).toEqual('1');
    });
  });

  it('should respect locale option', () => {
    TestBed.configureTestingModule({
      providers: [
        IntlDecimalPipe,
        {
          provide: INTL_LOCALES,
          useValue: 'en-US',
        },
      ],
    });
    testUnit = TestBed.inject(IntlDecimalPipe);

    expect(testUnit.transform(1024, { locale: 'de-DE' })).toEqual('1.024');
  });

  it('should not override the style option', () => {
    TestBed.configureTestingModule({
      providers: [
        IntlDecimalPipe,
        {
          provide: INTL_LOCALES,
          useValue: 'de-DE',
        },
        {
          provide: INTL_DECIMAL_PIPE_DEFAULT_OPTIONS,
          useValue: {
            style: 'percent',
          },
        },
      ],
    });
    testUnit = TestBed.inject(IntlDecimalPipe);

    expect(testUnit.transform(1, { style: 'percent' })).toEqual('1');
  });
});
