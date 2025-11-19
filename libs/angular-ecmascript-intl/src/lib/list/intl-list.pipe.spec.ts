import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { INTL_LOCALES } from '../locale';
import { IntlListPipe } from './intl-list.pipe';

describe('IntlListPipe', () => {
  let testUnit: IntlListPipe;

  beforeEach(() => TestBed.resetTestingModule());

  describe('parsing', () => {
    beforeEach(() => {
      TestBed.runInInjectionContext(() => {
        testUnit = new IntlListPipe();
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

    it('should handle empty arrays', () => {
      expect(testUnit.transform([])).toEqual('');
    });

    it('should transform string arrays', () => {
      expect(testUnit.transform(['apples', 'pies'])).toEqual('apples and pies');
    });

    it('should handle missing Intl.DisplayNames browser API', () => {
      vi.spyOn(Intl, 'ListFormat').mockReturnValue(undefined);
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => null);

      expect(testUnit.transform(['some', 'val'])).toBeNull();
      expect(consoleError).toHaveBeenCalledTimes(1);

      vi.restoreAllMocks();
    });
  });

  describe('internationalization', () => {
    it('should respect the set locale', () => {
      TestBed.overrideProvider(INTL_LOCALES, { useValue: 'de-DE' });
      TestBed.runInInjectionContext(() => (testUnit = new IntlListPipe()));

      expect(testUnit.transform(['Äpfel', 'Birnen'])).toEqual(
        'Äpfel und Birnen',
      );
    });
  });

  it('should respect locale option', () => {
    TestBed.overrideProvider(INTL_LOCALES, { useValue: 'en-US' });
    TestBed.runInInjectionContext(() => (testUnit = new IntlListPipe()));

    expect(
      testUnit.transform(['Äpfel', 'Birnen'], { locale: 'de-DE' }),
    ).toEqual('Äpfel und Birnen');
  });
});
