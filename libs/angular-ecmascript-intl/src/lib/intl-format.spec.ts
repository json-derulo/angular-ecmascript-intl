import { describe, expect, it, vi } from 'vitest';
import {
  intlFormatCountry,
  intlFormatCurrency,
  intlFormatDate,
  intlFormatDecimal,
  intlFormatDuration,
  intlFormatLanguage,
  intlFormatList,
  intlFormatPercent,
  intlFormatRelativeTime,
  intlFormatUnit,
} from '../public-api';

describe('standalone Intl formatters', () => {
  const options = { locale: 'en-US' };

  it.each([
    ['country', () => intlFormatCountry('US', options), 'United States'],
    ['currency', () => intlFormatCurrency('12.5', 'USD', options), '$12.50'],
    [
      'date',
      () => intlFormatDate(0, { ...options, timeZone: 'UTC' }),
      '1/1/1970',
    ],
    [
      'decimal',
      () => intlFormatDecimal('1234.5', { locale: ['en-US', 'de-DE'] }),
      '1,234.5',
    ],
    [
      'duration',
      () => intlFormatDuration({ hours: 2 }, { ...options, style: 'long' }),
      '2 hours',
    ],
    ['language', () => intlFormatLanguage('fr', options), 'French'],
    ['list', () => intlFormatList(new Set(['a', 'b']), options), 'a and b'],
    ['percent', () => intlFormatPercent(0.25, options), '25%'],
    [
      'unit',
      () => intlFormatUnit(2, 'liter', { ...options, unitDisplay: 'long' }),
      '2 liters',
    ],
  ] as const)(
    'formats %s without Angular injection',
    (_name, format, expected) => {
      expect(format()).toBe(expected);
    },
  );

  it('formats relative time without starting a refresh timer', () => {
    vi.useFakeTimers();
    try {
      vi.setSystemTime(new Date('2025-01-20T12:00:00Z'));
      expect(intlFormatRelativeTime('2025-01-20T11:55:00Z', options)).toBe(
        '5 minutes ago',
      );
      expect(vi.getTimerCount()).toBe(0);
    } finally {
      vi.useRealTimers();
    }
  });
});
