import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { INTL_LOCALES } from '../locale';
import { INTL_UNIT_PIPE_DEFAULT_OPTIONS } from './intl-unit-pipe-default-options';
import { IntlUnitPipe } from './intl-unit.pipe';

describe('IntlUnitPipe', () => {
  let testUnit: IntlUnitPipe;

  beforeEach(() => TestBed.resetTestingModule());

  describe('parsing', () => {
    beforeEach(() => {
      TestBed.runInInjectionContext(() => {
        testUnit = new IntlUnitPipe();
        Object.defineProperty(testUnit, 'locale', { value: 'en-US' });
      });
    });

    it('should create an instance', () => {
      expect(testUnit).toBeTruthy();
    });

    it('should handle null values', () => {
      expect(testUnit.transform(null, undefined)).toBeNull();
    });

    it('should handle undefined values', () => {
      expect(testUnit.transform(undefined, undefined)).toBeNull();
    });

    it('should handle empty strings', () => {
      expect(testUnit.transform('', undefined)).toBeNull();
    });

    it('should transform numbers', () => {
      expect(testUnit.transform(1, 'hour')).toEqual('1 hr');
    });

    it('should transform strings', () => {
      expect(testUnit.transform('2', 'hour')).toEqual('2 hr');
    });

    it('should handle invalid strings', () => {
      expect(() => testUnit.transform('invalid number', undefined)).toThrow();
    });

    it('should handle missing Intl.NumberFormat browser API', () => {
      vi.spyOn(Intl, 'NumberFormat').mockReturnValue(undefined);
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => null);
      expect(testUnit.transform('1', 'hour')).toBeNull();

      expect(consoleError).toHaveBeenCalledTimes(1);

      vi.restoreAllMocks();
    });
  });

  describe('internationalization', () => {
    it('should respect the set locale', () => {
      TestBed.overrideProvider(INTL_LOCALES, { useValue: 'de-DE' });
      TestBed.runInInjectionContext(() => (testUnit = new IntlUnitPipe()));

      expect(testUnit.transform(1, 'hour')).toEqual('1 Std.');
    });
  });

  describe('options', () => {
    it('should respect the setting from default config', () => {
      TestBed.overrideProvider(INTL_LOCALES, { useValue: 'en-US' });
      TestBed.overrideProvider(INTL_UNIT_PIPE_DEFAULT_OPTIONS, {
        useValue: {
          unitDisplay: 'narrow',
        },
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlUnitPipe()));

      expect(testUnit.transform(1, 'liter')).toEqual('1L');
    });

    it('should give the user options a higher priority', () => {
      TestBed.overrideProvider(INTL_LOCALES, { useValue: 'en-US' });
      TestBed.overrideProvider(INTL_UNIT_PIPE_DEFAULT_OPTIONS, {
        useValue: {
          unitDisplay: 'short',
        },
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlUnitPipe()));

      expect(testUnit.transform(1, 'liter', { unitDisplay: 'narrow' })).toEqual(
        '1L',
      );
    });
  });

  it('should respect locale option', () => {
    TestBed.overrideProvider(INTL_LOCALES, { useValue: 'en-US' });
    TestBed.runInInjectionContext(() => (testUnit = new IntlUnitPipe()));

    expect(testUnit.transform(1, 'hour', { locale: 'de-DE' })).toEqual(
      '1 Std.',
    );
  });

  it('should not override the style option', () => {
    TestBed.overrideProvider(INTL_LOCALES, { useValue: 'en-US' });
    TestBed.overrideProvider(INTL_UNIT_PIPE_DEFAULT_OPTIONS, {
      useValue: {
        style: 'decimal',
      },
    });
    TestBed.runInInjectionContext(() => (testUnit = new IntlUnitPipe()));

    expect(testUnit.transform(1, 'hour', { style: 'decimal' })).toEqual('1 hr');
  });
});
