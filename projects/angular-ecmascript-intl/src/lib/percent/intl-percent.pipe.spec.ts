import {IntlPercentPipe} from './intl-percent.pipe';
import {TestBed} from "@angular/core/testing";
import {INTL_LOCALES} from "../locale";
import {INTL_PERCENT_PIPE_DEFAULT_OPTIONS} from "./intl-percent-pipe-default-options";

describe('IntlPercentPipe', () => {
  let testUnit: IntlPercentPipe;

  describe('parsing', () => {
    beforeEach(() => {
      testUnit = new IntlPercentPipe('en-US');
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
      expect(testUnit.transform(1)).toEqual('100%');
    });

    it('should transform strings', () => {
      expect(testUnit.transform('1')).toEqual('100%');
    });

    it('should handle invalid strings', () => {
      expect(() => testUnit.transform('invalid number')).toThrow();
    });

    it('should handle missing Intl.NumberFormat browser API', () => {
      // @ts-expect-error
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
          IntlPercentPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
        ],
      });
      testUnit = TestBed.inject(IntlPercentPipe);

      expect(testUnit.transform(1)).toEqual('100\xa0%');
    });

    it('should fall back to the browser default locale', () => {
      TestBed.configureTestingModule({providers: [IntlPercentPipe]});

      const result1 = TestBed.inject(IntlPercentPipe).transform(0.1);
      const result2 = new IntlPercentPipe(navigator.language).transform(0.1);

      expect(result1).toEqual(result2);
    });
  });

  describe('options', () => {
    it('should respect the setting from default config', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlPercentPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
          {
            provide: INTL_PERCENT_PIPE_DEFAULT_OPTIONS,
            useValue: {
              signDisplay: 'always',
            },
          },
        ],
      });
      testUnit = TestBed.inject(IntlPercentPipe);

      expect(testUnit.transform(1)).toEqual('+100%');

    });

    it('should give the user options a higher priority', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlPercentPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'en-US',
          },
          {
            provide: INTL_PERCENT_PIPE_DEFAULT_OPTIONS,
            useValue: {
              signDisplay: 'exceptZero',
            },
          },
        ],
      });
      testUnit = TestBed.inject(IntlPercentPipe);

      expect(testUnit.transform(1, {signDisplay: 'never'})).toEqual('100%');
    });
  });

  it('should respect locale option', () => {
    TestBed.configureTestingModule({
      providers: [
        IntlPercentPipe,
        {
          provide: INTL_LOCALES,
          useValue: 'en-US',
        },
      ],
    });
    testUnit = TestBed.inject(IntlPercentPipe);

    expect(testUnit.transform(1, {locale: 'de-DE'})).toEqual('100\xa0%');
  });

  it('should not override the style option', () => {
    TestBed.configureTestingModule({
      providers: [
        IntlPercentPipe,
        {
          provide: INTL_LOCALES,
          useValue: 'en-US',
        },
        {
          provide: INTL_PERCENT_PIPE_DEFAULT_OPTIONS,
          useValue: {
            style: 'decimal',
          },
        },
      ],
    });
    testUnit = TestBed.inject(IntlPercentPipe);

    expect(testUnit.transform(1, {style: 'decimal'})).toEqual('100%');
  });
});
