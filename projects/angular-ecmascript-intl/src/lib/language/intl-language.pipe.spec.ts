import { TestBed } from '@angular/core/testing';
import { INTL_LOCALES } from '../locale';
import { INTL_LANGUAGE_PIPE_DEFAULT_OPTIONS } from './intl-language-pipe-default-options';
import { IntlLanguagePipe } from './intl-language.pipe';

describe('IntlLanguagePipe', () => {
  let testUnit: IntlLanguagePipe;

  describe('parsing', () => {
    beforeEach(() => {
      TestBed.runInInjectionContext(() => {
        testUnit = new IntlLanguagePipe();
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
      expect(testUnit.transform('en-US')).toEqual('American English');
    });

    it('should handle missing Intl.DisplayNames browser API', () => {
      // @ts-expect-error Intl APIs are not expected to be undefined
      spyOn(Intl, 'DisplayNames').and.returnValue(undefined);
      const consoleError = spyOn(console, 'error');

      expect(testUnit.transform('en-US')).toBeNull();
      expect(consoleError).toHaveBeenCalledTimes(1);
    });

    it('should handle missing data', () => {
      expect(testUnit.transform('yy', { fallback: 'none' })).toBeNull();
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
      TestBed.runInInjectionContext(() => (testUnit = new IntlLanguagePipe()));

      expect(testUnit.transform('de-AT')).toEqual('Österreichisches Deutsch');
    });

    it('should fall back to the browser default locale', () => {
      let defaultLanguageTestUnit!: IntlLanguagePipe;
      let browserLanguageTestUnit!: IntlLanguagePipe;

      TestBed.runInInjectionContext(() => {
        defaultLanguageTestUnit = new IntlLanguagePipe();
        browserLanguageTestUnit = new IntlLanguagePipe();
        Object.defineProperty(browserLanguageTestUnit, 'locale', {
          value: undefined,
        });
        Object.defineProperty(defaultLanguageTestUnit, 'locale', {
          value: navigator.language,
        });
      });

      const result1 = browserLanguageTestUnit.transform('en-US');
      const result2 = defaultLanguageTestUnit.transform('en-US');

      expect(result1).toEqual(result2);
    });
  });

  describe('options', () => {
    it('should respect the setting from default config', () => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
          {
            provide: INTL_LANGUAGE_PIPE_DEFAULT_OPTIONS,
            useValue: {
              languageDisplay: 'standard',
            },
          },
        ],
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlLanguagePipe()));

      expect(testUnit.transform('de-AT')).toEqual('Deutsch (Österreich)');
    });

    it('should give the user options a higher priority', () => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
          {
            provide: INTL_LANGUAGE_PIPE_DEFAULT_OPTIONS,
            useValue: {
              languageDisplay: 'dialect',
            },
          },
        ],
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlLanguagePipe()));

      expect(
        testUnit.transform('de-AT', { languageDisplay: 'standard' }),
      ).toEqual('Deutsch (Österreich)');
    });

    it('should not override the type option', () => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
          {
            provide: INTL_LANGUAGE_PIPE_DEFAULT_OPTIONS,
            useValue: {
              type: 'region',
            },
          },
        ],
      });
      TestBed.runInInjectionContext(() => (testUnit = new IntlLanguagePipe()));

      expect(testUnit.transform('de', { type: 'region' })).toEqual('Deutsch');
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
    TestBed.runInInjectionContext(() => (testUnit = new IntlLanguagePipe()));

    expect(testUnit.transform('de-DE', { locale: 'de-DE' })).toEqual(
      'Deutsch (Deutschland)',
    );
  });
});
