# Angular ECMAScript Intl

[![codecov](https://codecov.io/gh/json-derulo/angular-ecmascript-intl/graph/badge.svg?token=RHNUC3YCJP)](https://codecov.io/gh/json-derulo/angular-ecmascript-intl)

Format dates, numbers, display names, lists, and durations with the JavaScript
`Intl` APIs. Use Angular pipes in templates or call the same formatters from
TypeScript. [Live demo](https://json-derulo.github.io/angular-ecmascript-intl/)

## Installation

```sh
npm install angular-ecmascript-intl
```

Use TypeScript library definitions for ES2021 or later. See the
[Angular compatibility table](#angular-compatibility-table) for package versions.

## Angular templates

Import the pipes you use into your component's `imports`. You can also import
`IntlModule` to make all pipes available at once.

```typescript
import { Component } from '@angular/core';
import { IntlCurrencyPipe } from 'angular-ecmascript-intl';

@Component({
  selector: 'app-price',
  imports: [IntlCurrencyPipe],
  template: "{{ price | intlCurrency: 'EUR' : { locale: 'de-DE' } }}",
})
export class PriceComponent {
  readonly price = 1234.5;
}
```

## TypeScript formatters

Import an `intlFormat*` function and call it directly, including outside an
Angular injection context. The [formatting reference](#formatting-reference)
lists the pipe and function for each format.

```typescript
import { intlFormatCurrency, intlFormatDate } from 'angular-ecmascript-intl';

intlFormatDate('2025-01-20T12:00:00Z', {
  locale: 'en-US',
  dateStyle: 'long',
  timeZone: 'UTC',
}); // 'January 20, 2025'

intlFormatCurrency(1234.5, 'USD', { locale: 'en-US' }); // '$1,234.50'
```

## Locale and pipe defaults

Angular pipes use the locale in this order:

1. The `locale` option passed to the pipe.
2. The value provided by `INTL_LOCALES`.
3. The JavaScript runtime's default locale.

Provide `INTL_LOCALES` in your application, component, or NgModule providers.
Its value can be a BCP 47 locale tag or an ordered array of locale tags.
Each pipe also has an `INTL_*_PIPE_DEFAULT_OPTIONS` token for its formatting
defaults. Options passed to a pipe take precedence over these defaults.

```typescript
import { ApplicationConfig } from '@angular/core';
import {
  INTL_DATE_PIPE_DEFAULT_OPTIONS,
  INTL_LOCALES,
} from 'angular-ecmascript-intl';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: INTL_LOCALES, useValue: ['de-DE', 'en-GB'] },
    {
      provide: INTL_DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateStyle: 'long', timeZone: 'UTC' },
    },
  ],
};
```

Standalone formatters use their explicit options and fall back to the runtime's
default locale. Angular injection tokens apply to pipes only. To reuse the
configured locale in a formatter, inject `INTL_LOCALES` in your Angular code and
pass the value as `options.locale`. This option accepts a single tag or an
ordered array.

```typescript
import { inject, Injectable } from '@angular/core';
import { INTL_LOCALES, intlFormatDate } from 'angular-ecmascript-intl';

@Injectable({ providedIn: 'root' })
export class DateLabels {
  private readonly locale = inject(INTL_LOCALES, { optional: true });

  format(value: Date): string | null {
    return intlFormatDate(value, {
      locale: this.locale ?? undefined,
      dateStyle: 'long',
    });
  }
}
```

## Formatting reference

| Format                                       | Angular pipe       | TypeScript function                             | Pipe default options token                |
| -------------------------------------------- | ------------------ | ----------------------------------------------- | ----------------------------------------- |
| [Date](#date-pipe)                           | `intlDate`         | `intlFormatDate(value, options?)`               | `INTL_DATE_PIPE_DEFAULT_OPTIONS`          |
| [Decimal](#decimal-pipe)                     | `intlDecimal`      | `intlFormatDecimal(value, options?)`            | `INTL_DECIMAL_PIPE_DEFAULT_OPTIONS`       |
| [Percent](#percent-pipe)                     | `intlPercent`      | `intlFormatPercent(value, options?)`            | `INTL_PERCENT_PIPE_DEFAULT_OPTIONS`       |
| [Currency](#currency-pipe)                   | `intlCurrency`     | `intlFormatCurrency(value, currency, options?)` | `INTL_CURRENCY_PIPE_DEFAULT_OPTIONS`      |
| [Language](#language-pipe)                   | `intlLanguage`     | `intlFormatLanguage(value, options?)`           | `INTL_LANGUAGE_PIPE_DEFAULT_OPTIONS`      |
| [Country](#country-pipe)                     | `intlCountry`      | `intlFormatCountry(value, options?)`            | `INTL_COUNTRY_PIPE_DEFAULT_OPTIONS`       |
| [Unit](#unit-pipe)                           | `intlUnit`         | `intlFormatUnit(value, unit, options?)`         | `INTL_UNIT_PIPE_DEFAULT_OPTIONS`          |
| [List](#list-pipe)                           | `intlList`         | `intlFormatList(value, options?)`               | `INTL_LIST_PIPE_DEFAULT_OPTIONS`          |
| [Relative time](#relative-time-timeago-pipe) | `intlRelativeTime` | `intlFormatRelativeTime(value, options?)`       | `INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS` |
| [Duration](#duration-pipe)                   | `intlDuration`     | `intlFormatDuration(value, options?)`           | `INTL_DURATION_PIPE_DEFAULT_OPTIONS`      |

All ten formats accept `null` and `undefined` as input and return `null` for them.

### Date pipe

`{{ value | intlDate : options }}`

Pass a `Date`, a string accepted by `new Date()`, or a Unix timestamp in
**milliseconds**. Options include `dateStyle`, `timeStyle`, `timeZone`, and
`hour12`. An invalid date returns `null`. [Intl.DateTimeFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)

### Decimal pipe

`{{ value | intlDecimal : options }}`

Pass a number or numeric string. Decimal, percent, currency, and unit formats
share options such as `notation`, `signDisplay`, and limits on integer,
fraction, and significant digits. [Intl.NumberFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)

### Percent pipe

`{{ 0.24 | intlPercent : options }}`

Pass a number or numeric string as a proportion. For example, `0.24` represents
24%.

### Currency pipe

`{{ value | intlCurrency : 'USD' : options }}`

Pass a number or numeric string and an ISO 4217 currency code. Use
`currencyDisplay` to control how the currency appears and `currencySign` to
select standard or accounting notation.

### Language pipe

`{{ 'en-US' | intlLanguage : options }}`

Pass a BCP 47 language tag. Use `languageDisplay` to choose dialect or standard
names. [Intl.DisplayNames options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames)

### Country pipe

`{{ 'US' | intlCountry : options }}`

Pass a two-letter region code such as `US` or a three-digit region code such as
`419` for Latin America. [Intl.DisplayNames region codes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of)

### Unit pipe

`{{ value | intlUnit : 'hour' : options }}`

Pass a number or numeric string and an Intl unit identifier, such as `hour` or
`kilometer-per-hour`. Use `unitDisplay` to choose long, short, or narrow unit
names. [Intl unit identifiers](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)

### List pipe

`{{ items | intlList : options }}`

Pass an iterable of strings. Use `type` for a conjunction, disjunction, or list
of units, and `style` for long, short, or narrow formatting. [Intl.ListFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat)

### Relative Time (timeago) pipe

`{{ value | intlRelativeTime : options }}`

Pass a `Date`, a string accepted by `new Date()`, or a Unix timestamp in
**milliseconds**. An invalid date throws an error. Options include `numeric`
and `style`. The pipe refreshes every minute. `intlFormatRelativeTime()`
computes relative time on each call. [Intl.RelativeTimeFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat)

### Duration pipe

`{{ duration | intlDuration : options }}`

Pass a duration object such as `{ hours: 2, minutes: 53 }`. Options include
`style`, `fractionalDigits`, and per-unit style and display settings. [Intl.DurationFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat)

## Browser compatibility

This library supports the latest major version of the following browsers:

- Chrome
- Firefox
- Safari

The library runs browser tests for Chromium, Firefox, and WebKit. For older browsers, the table lists minimum versions for the underlying Intl APIs. Check individual Intl options separately if you rely on them.

| Pipe          | Chrome | Firefox | Safari |
| ------------- | ------ | ------- | ------ |
| Date          | 24     | 29      | 10     |
| Decimal       | 24     | 29      | 10     |
| Percent       | 24     | 29      | 10     |
| Currency      | 24     | 29      | 10     |
| Language      | 81     | 86      | 14.1   |
| Country       | 81     | 86      | 14.1   |
| Unit          | 77     | 78      | 14.1   |
| List          | 72     | 78      | 14.1   |
| Relative Time | 71     | 65      | 14     |
| Duration      | 129    | 136     | 16.4   |

## Angular compatibility table

| Angular | angular-ecmascript-intl |
| ------- | ----------------------- |
| 22      | 7.x                     |
| 20, 21  | 6.x                     |
| 19      | 5.x                     |
| 18      | 4.x                     |
| 17      | 3.x                     |
| 16      | 2.x                     |
| 15      | 1.x                     |

## Background

The library grew out of a request for Angular pipes backed by the ECMAScript Intl APIs. [Angular issue #49143](https://github.com/angular/angular/issues/49143)
