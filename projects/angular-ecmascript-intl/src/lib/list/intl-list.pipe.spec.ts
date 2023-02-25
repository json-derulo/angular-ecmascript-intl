import {IntlListPipe} from './intl-list.pipe';
import {TestBed} from "@angular/core/testing";
import {INTL_LOCALES} from "../locale";

describe('IntlListPipe', () => {
  let testUnit: IntlListPipe;

  describe('parsing', () => {
    beforeEach(() => {
      testUnit = new IntlListPipe('en-US');
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
      // @ts-expect-error Intl APIs are not expected to be undefined
      spyOn(Intl, 'ListFormat').and.returnValue(undefined);
      const consoleError = spyOn(console, 'error');

      expect(testUnit.transform(['some', 'val'])).toBeNull();
      expect(consoleError).toHaveBeenCalledTimes(1);
    });
  });

  describe('internationalization', () => {
    it('should respect the set locale', () => {
      TestBed.configureTestingModule({
        providers: [
          IntlListPipe,
          {
            provide: INTL_LOCALES,
            useValue: 'de-DE',
          },
        ],
      });
      testUnit = TestBed.inject(IntlListPipe);

      expect(testUnit.transform(['Äpfel', 'Birnen'])).toEqual('Äpfel und Birnen');
    });

    it('should fall back to the browser default locale', () => {
      TestBed.configureTestingModule({providers: [IntlListPipe]});

      const result1 = TestBed.inject(IntlListPipe).transform(['some', 'val']);
      const result2 = new IntlListPipe(navigator.language).transform(['some', 'val']);

      expect(result1).toEqual(result2);
    });
  });

  it('should respect locale option', () => {
    TestBed.configureTestingModule({
      providers: [
        IntlListPipe,
        {
          provide: INTL_LOCALES,
          useValue: 'en-US',
        },
      ],
    });
    testUnit = TestBed.inject(IntlListPipe);

    expect(testUnit.transform(['Äpfel', 'Birnen'], {locale: 'de-DE'})).toEqual('Äpfel und Birnen');
  });
});
