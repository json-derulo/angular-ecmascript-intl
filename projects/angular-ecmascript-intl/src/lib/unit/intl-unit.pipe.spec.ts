import { TestBed } from '@angular/core/testing';
import { INTL_LOCALES } from '../locale';
import { INTL_UNIT_PIPE_DEFAULT_OPTIONS } from './intl-unit-pipe-default-options';
import { IntlUnitPipe } from './intl-unit.pipe';

describe('IntlUnitPipe', () => {
  let testUnit: IntlUnitPipe;

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
      // @ts-expect-error Intl APIs are not expected to be undefined
      spyOn(Intl, 'NumberFormat').and.returnValue(undefined);
      const consoleError = spyOn(console, 'error');
      expect(testUnit.transform('1', 'hour')).toBeNull();

      expect(consoleError).toHaveBeenCalledTimes(1);
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
      TestBed.runInInjectionContext(() => (testUnit = new IntlUnitPipe()));

      expect(testUnit.transform(1, 'hour')).toEqual('1 Std.');
    });

    it('should fall back to the browser default locale', () => {
      let defaultLanguageTestUnit!: IntlUnitPipe;
      let browserLanguageTestUnit!: IntlUnitPipe;

      TestBed.runInInjectionContext(() => {
        defaultLanguageTestUnit = new IntlUnitPipe();
        browserLanguageTestUnit = new IntlUnitPipe();
        Object.defineProperty(browserLanguageTestUnit, 'locale', {
          value: undefined,
        });
        Object.defineProperty(defaultLanguageTestUnit, 'locale', {
          value: navigator.language,
        });
      });

      const result1 = browserLanguageTestUnit.transform(1, 'hour');
      const result2 = defaultLanguageTestUnit.transform(1, 'hour');

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
            provide: INTL_UNIT_PIPE_DEFAULT_OPTIONS,
            useValue: {
              unitDisplay: 'narrow',
            },
          },
        ],
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlUnitPipe()));

      expect(testUnit.transform(1, 'liter')).toEqual('1L');
    });

    it('should give the user options a higher priority', () => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
          {
            provide: INTL_UNIT_PIPE_DEFAULT_OPTIONS,
            useValue: {
              unitDisplay: 'short',
            },
          },
        ],
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlUnitPipe()));

      expect(testUnit.transform(1, 'liter', { unitDisplay: 'narrow' })).toEqual(
        '1L',
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
    TestBed.runInInjectionContext(() => (testUnit = new IntlUnitPipe()));

    expect(testUnit.transform(1, 'hour', { locale: 'de-DE' })).toEqual(
      '1 Std.',
    );
  });

  it('should not override the style option', () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: INTL_LOCALES,
          useValue: 'en-US',
        },
        {
          provide: INTL_UNIT_PIPE_DEFAULT_OPTIONS,
          useValue: {
            style: 'decimal',
          },
        },
      ],
    });
    TestBed.runInInjectionContext(() => (testUnit = new IntlUnitPipe()));

    expect(testUnit.transform(1, 'hour', { style: 'decimal' })).toEqual('1 hr');
  });
});
