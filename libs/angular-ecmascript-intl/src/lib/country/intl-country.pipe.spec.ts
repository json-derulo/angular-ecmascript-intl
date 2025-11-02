import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { INTL_LOCALES } from '../locale';
import { INTL_COUNTRY_PIPE_DEFAULT_OPTIONS } from './intl-country-pipe-default-options';
import { IntlCountryPipe } from './intl-country.pipe';

describe('IntlCountryPipe', () => {
  let testUnit: IntlCountryPipe;

  describe('parsing', () => {
    beforeEach(() => {
      TestBed.runInInjectionContext(() => {
        testUnit = new IntlCountryPipe();
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
      expect(testUnit.transform('US')).toEqual('United States');
    });

    it('should handle missing Intl.DisplayNames browser API', () => {
      vi.spyOn(Intl, 'DisplayNames').mockReturnValue(undefined);
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => null);

      expect(testUnit.transform('US')).toBeNull();
      expect(consoleError).toHaveBeenCalledTimes(1);

      vi.restoreAllMocks();
    });

    it('should handle missing data', () => {
      expect(testUnit.transform('YY', { fallback: 'none' })).toBeNull();
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
      TestBed.runInInjectionContext(() => (testUnit = new IntlCountryPipe()));

      expect(testUnit.transform('AT')).toEqual('Österreich');
    });
  });

  describe('options', () => {
    it('should not override the type option', () => {
      TestBed.configureTestingModule({
        providers: [
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
      TestBed.runInInjectionContext(() => (testUnit = new IntlCountryPipe()));

      expect(testUnit.transform('DE', { type: 'language' })).toEqual(
        'Deutschland',
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
    TestBed.runInInjectionContext(() => (testUnit = new IntlCountryPipe()));

    expect(testUnit.transform('US', { locale: 'de-DE' })).toEqual(
      'Vereinigte Staaten',
    );
  });
});
