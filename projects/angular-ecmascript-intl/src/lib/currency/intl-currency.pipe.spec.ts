import { IntlCurrencyPipe } from './intl-currency.pipe';
import { TestBed } from '@angular/core/testing';
import { INTL_LOCALES } from '../locale';
import { INTL_CURRENCY_PIPE_DEFAULT_OPTIONS } from './intl-currency-pipe-default-options';

describe('IntlCurrencyPipe', () => {
  let testUnit: IntlCurrencyPipe;

  describe('parsing', () => {
    beforeEach(() => {
      testUnit = new IntlCurrencyPipe('en-US');
    });

    it('should create an instance', () => {
      expect(testUnit).toBeTruthy();
    });

    it('should handle null values', () => {
      expect(testUnit.transform(null, 'USD')).toBeNull();
    });

    it('should handle undefined values', () => {
      expect(testUnit.transform(undefined, 'USD')).toBeNull();
    });

    it('should handle empty strings', () => {
      expect(testUnit.transform('', 'USD')).toBeNull();
    });

    it('should transform numbers', () => {
      expect(testUnit.transform(1024.224, 'USD')).toEqual('$1,024.22');
    });

    it('should transform strings', () => {
      expect(testUnit.transform('1024.224', 'USD')).toEqual('$1,024.22');
    });

    it('should handle invalid strings', () => {
      expect(() => testUnit.transform('invalid number', 'USD')).toThrow();
    });

    it('should handle missing Intl.NumberFormat browser API', () => {
      // @ts-expect-error Intl APIs are not expected to be undefined
      spyOn(Intl, 'NumberFormat').and.returnValue(undefined);
      const consoleError = spyOn(console, 'error');
      expect(testUnit.transform('1', 'USD')).toBeNull();

      expect(consoleError).toHaveBeenCalledTimes(1);
    });
  });

  describe('internationalization', () => {
    it('should respect the set locale', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlCurrencyPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
        ],
      });
      testUnit = TestBed.inject(IntlCurrencyPipe);

      expect(testUnit.transform(1024.2249, 'EUR')).toEqual('1.024,22\xa0€');
    });

    it('should fall back to the browser default locale', () => {
      TestBed.configureTestingModule({ providers: [IntlCurrencyPipe] });

      const result1 = TestBed.inject(IntlCurrencyPipe).transform(
        1024.2249,
        'EUR',
      );
      const result2 = new IntlCurrencyPipe(navigator.language).transform(
        1024.2249,
        'EUR',
      );

      expect(result1).toEqual(result2);
    });
  });

  describe('options', () => {
    it('should respect the setting from default config', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlCurrencyPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
          {
            provide: INTL_CURRENCY_PIPE_DEFAULT_OPTIONS,
            useValue: {
              signDisplay: 'always',
            },
          },
        ],
      });
      testUnit = TestBed.inject(IntlCurrencyPipe);

      expect(testUnit.transform(1, 'USD')).toEqual('+$1.00');
    });

    it('should give the user options a higher priority', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlCurrencyPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
          {
            provide: INTL_CURRENCY_PIPE_DEFAULT_OPTIONS,
            useValue: {
              signDisplay: 'exceptZero',
            },
          },
        ],
      });
      testUnit = TestBed.inject(IntlCurrencyPipe);

      expect(testUnit.transform(1, 'USD', { signDisplay: 'never' })).toEqual(
        '$1.00',
      );
    });
  });

  it('should respect locale option', () => {
    TestBed.configureTestingModule({
      providers: [
        IntlCurrencyPipe,
        {
          provide: INTL_LOCALES,
          useValue: 'en-US',
        },
      ],
    });
    testUnit = TestBed.inject(IntlCurrencyPipe);

    expect(testUnit.transform(1024, 'USD', { locale: 'de-DE' })).toEqual(
      '1.024,00\xa0$',
    );
  });

  it('should not override the style option', () => {
    TestBed.configureTestingModule({
      providers: [
        IntlCurrencyPipe,
        {
          provide: INTL_LOCALES,
          useValue: 'en-US',
        },
        {
          provide: INTL_CURRENCY_PIPE_DEFAULT_OPTIONS,
          useValue: {
            style: 'percent',
          },
        },
      ],
    });
    testUnit = TestBed.inject(IntlCurrencyPipe);

    expect(testUnit.transform(1, 'USD', { style: 'percent' })).toEqual('$1.00');
  });
});
