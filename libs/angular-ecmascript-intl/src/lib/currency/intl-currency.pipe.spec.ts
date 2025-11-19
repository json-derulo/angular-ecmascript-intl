import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { INTL_LOCALES } from '../locale';
import { INTL_CURRENCY_PIPE_DEFAULT_OPTIONS } from './intl-currency-pipe-default-options';
import { IntlCurrencyPipe } from './intl-currency.pipe';

describe('IntlCurrencyPipe', () => {
  let testUnit: IntlCurrencyPipe;

  beforeEach(() => TestBed.resetTestingModule());

  describe('parsing', () => {
    beforeEach(() => {
      TestBed.runInInjectionContext(() => {
        testUnit = new IntlCurrencyPipe();
        Object.defineProperty(testUnit, 'locale', { value: 'en-US' });
      });
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
      vi.spyOn(Intl, 'NumberFormat').mockReturnValue(undefined);
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => null);
      expect(testUnit.transform('1', 'USD')).toBeNull();

      expect(consoleError).toHaveBeenCalledTimes(1);

      vi.restoreAllMocks();
    });
  });

  describe('internationalization', () => {
    it('should respect the set locale', () => {
      TestBed.overrideProvider(INTL_LOCALES, { useValue: 'de-DE' });
      TestBed.runInInjectionContext(() => (testUnit = new IntlCurrencyPipe()));

      expect(testUnit.transform(1024.2249, 'EUR')).toEqual('1.024,22\xa0€');
    });
  });

  describe('options', () => {
    it('should respect the setting from default config', () => {
      TestBed.overrideProvider(INTL_LOCALES, { useValue: 'en-US' });
      TestBed.overrideProvider(INTL_CURRENCY_PIPE_DEFAULT_OPTIONS, {
        useValue: {
          signDisplay: 'always',
        },
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlCurrencyPipe()));

      expect(testUnit.transform(1, 'USD')).toEqual('+$1.00');
    });

    it('should give the user options a higher priority', () => {
      TestBed.overrideProvider(INTL_LOCALES, { useValue: 'en-US' });
      TestBed.overrideProvider(INTL_CURRENCY_PIPE_DEFAULT_OPTIONS, {
        useValue: {
          signDisplay: 'exceptZero',
        },
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlCurrencyPipe()));

      expect(testUnit.transform(1, 'USD', { signDisplay: 'never' })).toEqual(
        '$1.00',
      );
    });
  });

  it('should respect locale option', () => {
    TestBed.overrideProvider(INTL_LOCALES, { useValue: 'en-US' });
    TestBed.runInInjectionContext(() => (testUnit = new IntlCurrencyPipe()));

    expect(testUnit.transform(1024, 'USD', { locale: 'de-DE' })).toEqual(
      '1.024,00\xa0$',
    );
  });

  it('should not override the style option', () => {
    TestBed.overrideProvider(INTL_LOCALES, { useValue: 'en-US' });
    TestBed.overrideProvider(INTL_CURRENCY_PIPE_DEFAULT_OPTIONS, {
      useValue: {
        style: 'percent',
      },
    });
    TestBed.runInInjectionContext(() => (testUnit = new IntlCurrencyPipe()));

    expect(testUnit.transform(1, 'USD', { style: 'percent' })).toEqual('$1.00');
  });
});
