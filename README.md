# Angular ECMAScript Intl

[![codecov](https://codecov.io/gh/json-derulo/angular-ecmascript-intl/graph/badge.svg?token=RHNUC3YCJP)](https://codecov.io/gh/json-derulo/angular-ecmascript-intl)

Contains pipes to transform internationalization data using `Intl.*` browser APIs.

## Getting started

Install the package:

```
npm install angular-ecmascript-intl --save
```

Import the pipes individually as per usage, or import the `IntlModule` to import all pipes at once.

By default, all pipes will use the browser default locale.
If you want to override it, you can provide the `INTL_LOCALES` injection token:

```typescript
import { NgModule } from "@angular/core";
import { INTL_LOCALES } from "angular-ecmascript-intl";

@NgModule({
  providers: [
    {
      provide: INTL_LOCALES,
      useValue: "de-DE",
    },
  ],
})
export class MyModule {}
```

Also, every pipe accepts the `locale` option.

Now you can use the pipes, see below.

## Pipes

- [Date pipe](#date-pipe)
- [Decimal pipe](#decimal-pipe)
- [Percent pipe](#percent-pipe)
- [Currency pipe](#currency-pipe)
- [Language pipe](#language-pipe)
- [Country pipe](#country-pipe)
- [Unit pipe](#unit-pipe)
- [List pipe](#list-pipe)
- [Relative Time (timeago) pipe](#relative-time-timeago-pipe)

### Date pipe

Use the date pipe like the following:

```
{{myDate | intlDate: options}}
```

The input date can be one of the following:

- `Date` object
- number (UNIX timestamp)
- string (will be parsed by `new Date()` constructor)
- null
- undefined

The following options are supported:

- [`dateStyle`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle)
- [`timeStyle`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timestyle)
- [`hour12`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#hour12)

With the `INTL_DATE_PIPE_DEFAULT_OPTIONS` injection token you can specify default options.

### Decimal pipe

Use the decimal pipe like the following:

```
{{1.24 | intlDecimal: options}}
```

The input can be one of the following:

- number
- string (must be parseable as number)
- null
- undefined

The following options are supported:

- [`notation`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#notation)
- [`signDisplay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#signdisplay)
- [`minimumIntegerDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumintegerdigits)
- [`minimumFractionDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumfractiondigits)
- [`maximumFractionDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumfractiondigits)
- [`minimumSignificantDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumsignificantdigits)
- [`maximumSignificantDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumsignificantdigits)

With the `INTL_DECIMAL_PIPE_DEFAULT_OPTIONS` injection token you can specify default options.

### Percent pipe

Use the percent pipe like the following:

```
{{0.24 | intlPercent: options}}
```

The input can be one of the following:

- number
- string (must be parseable as number)
- null
- undefined

The following options are supported:

- [`notation`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#notation)
- [`signDisplay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#signdisplay)
- [`minimumIntegerDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumintegerdigits)
- [`minimumFractionDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumfractiondigits)
- [`maximumFractionDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumfractiondigits)
- [`minimumSignificantDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumsignificantdigits)
- [`maximumSignificantDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumsignificantdigits)

With the `INTL_PERCENT_PIPE_DEFAULT_OPTIONS` injection token you can specify default options.

### Currency pipe

Use the currency pipe like the following:

```
{{1.24 | intlCurrency: 'USD': options}}
```

The input can be one of the following:

- number
- string (must be parseable as number)
- null
- undefined

The currency code parameter is required and must be a valid ISO 4217 currency code. If you want to transform a decimal
number instead, use the `intlDecimal` pipe.

The following additional options are supported:

- [`currencyDisplay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencydisplay)
- [`currencySign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencysign)
- [`notation`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#notation)
- [`signDisplay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#signdisplay)
- [`minimumIntegerDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumintegerdigits)
- [`minimumFractionDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumfractiondigits)
- [`maximumFractionDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumfractiondigits)
- [`minimumSignificantDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumsignificantdigits)
- [`maximumSignificantDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumsignificantdigits)

With the `INTL_CURRENCY_PIPE_DEFAULT_OPTIONS` injection token you can specify default options.

### Language pipe

Use the language pipe like the following:

```
{{'en-US' | intlLanguage: options}}
```

The input can be one of the following:

- string (must be a BCP 47 IETF language tag)
- null
- undefined

The following option is supported:

- [`languageDisplay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames#languagedisplay)

With the `INTL_LANGUAGE_PIPE_DEFAULT_OPTIONS` injection token you can specify default options.

### Country pipe

Use the country pipe like the following:

```
{{'US' | intlCountry: options}}
```

The input can be one of the following:

- string (must be two-letter ISO 639-1 language code or a three-letter ISO 639-2 language code)
- null
- undefined

### Unit pipe

Use the unit pipe like the following:

```
{{1.2 | intlUnit: 'hour': options}}
```

The input can be one of the following:

- number
- string (must be parseable as number)
- null
- undefined

The unit parameter is required, see
the [specification](https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier)
for a full list of possible values. If you want to transform a decimal number instead, use the `intlDecimal` pipe.

The following additional options are supported:

- [`unitDisplay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unitdisplay)
- [`notation`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#notation)
- [`signDisplay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#signdisplay)
- [`minimumIntegerDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumintegerdigits)
- [`minimumFractionDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumfractiondigits)
- [`maximumFractionDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumfractiondigits)
- [`minimumSignificantDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumsignificantdigits)
- [`maximumSignificantDigits`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumsignificantdigits)

With the `INTL_UNIT_PIPE_DEFAULT_OPTIONS` injection token you can specify default options.

### List pipe

Use the list pipe like the following:

```
{{['my', 'items'] | intlList: options}}
```

The input can be one of the following:

- Iterable of strings
- null
- undefined

The following options are supported:

- [`type`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#type)
- [`style`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#style)

With the `INTL_LIST_PIPE_DEFAULT_OPTIONS` injection token you can specify default options.

## Relative Time (timeago) pipe

The relative time format will format the input date compared to the current date in a "timeago" format. Every minute,
the value will be updated automatically.

Use the relative time pipe like the following:

```
{{myDate | intlRelativeTime: options}}
```

The input date can be one of the following:

- `Date` object
- number (UNIX timestamp)
- string (will be parsed by `new Date()` constructor)
- null
- undefined

The following options are supported:

- [`numeric`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#numeric)
- [`style`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#style)

With the `INTL_RELATIVE_TIME_PIPE_DEFAULT_OPTIONS` injection token you can specify default options.

## Browser compatibility

This library supports the latest major version of the following browsers:

- Chrome
- Firefox
- Safari

For each of those browsers, unit tests are being performed regularly.

In case you need to support older versions of that browsers, see the below table with the minimum required browser version for each pipe:

| Pipe          | Chrome | Firefox | Safari |
| ------------- | ------ | ------- | ------ |
| Date          | 24     | 29      | 10     |
| Number        | 24     | 29      | 10     |
| Percent       | 24     | 29      | 10     |
| Currency      | 24     | 29      | 10     |
| Language      | 81     | 86      | 14.1   |
| Country       | 81     | 86      | 14.1   |
| Unit          | 77     | 78      | 14.1   |
| List          | 72     | 78      | 14.1   |
| Relative Time | 71     | 65      | 14     |

## Angular compatibility table

| Angular | angular-ecmascript-intl |
| ------- | ----------------------- |
| 19      | 5.x                     |
| 18      | 4.x                     |
| 17      | 3.x                     |
| 16      | 2.x                     |
| 15      | 1.x                     |

## Background

For more context, see the following [GitHub issue](https://github.com/angular/angular/issues/49143)
