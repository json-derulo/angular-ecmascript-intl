import { IntlCountryPipe } from './intl-country.pipe';
import { TestBed } from '@angular/core/testing';
import { INTL_LOCALES } from '../locale';
import { INTL_COUNTRY_PIPE_DEFAULT_OPTIONS } from './intl-country-pipe-default-options';

describe('IntlCountryPipe', () => {
  let testUnit: IntlCountryPipe;

  describe('parsing', () => {
    beforeEach(() => {
      testUnit = new IntlCountryPipe('en-US');
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
      expect(testUnit.transform('US')).toEqual('United States');
    });

    it('should handle missing Intl.DisplayNames browser API', () => {
      // @ts-expect-error Intl APIs are not expected to be undefined
      spyOn(Intl, 'DisplayNames').and.returnValue(undefined);
      const consoleError = spyOn(console, 'error');

      expect(testUnit.transform('US')).toBeNull();
      expect(consoleError).toHaveBeenCalledTimes(1);
    });
  });

  describe('internationalization', () => {
    it('should respect the set locale', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlCountryPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
        ],
      });
      testUnit = TestBed.inject(IntlCountryPipe);

      expect(testUnit.transform('AT')).toEqual('Österreich');
    });

    it('should fall back to the browser default locale', () => {
      TestBed.configureTestingModule({ providers: [IntlCountryPipe] });

      const result1 = TestBed.inject(IntlCountryPipe).transform('US');
      const result2 = new IntlCountryPipe(navigator.language).transform('US');

      expect(result1).toEqual(result2);
    });
  });

  describe('options', () => {
    it('should not override the type option', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlCountryPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
          {
            provide: INTL_COUNTRY_PIPE_DEFAULT_OPTIONS,
            useValue: {
              type: 'language',
            },
          },
        ],
      });
      testUnit = TestBed.inject(IntlCountryPipe);

      expect(testUnit.transform('DE', { type: 'language' })).toEqual(
        'Deutschland',
      );
    });
  });

  it('should respect locale option', () => {
    TestBed.configureTestingModule({
      providers: [
        IntlCountryPipe,
        {
          provide: INTL_LOCALES,
          useValue: 'en-US',
        },
      ],
    });
    testUnit = TestBed.inject(IntlCountryPipe);

    expect(testUnit.transform('US', { locale: 'de-DE' })).toEqual(
      'Vereinigte Staaten',
    );
  });
});
