# Angular ECMAScript Intl

Contains pipes to transform internationalization data using `Intl.*` browser APIs.

## Getting started

Install the package:

```
npm install angular-ecmascript-intl --save
```

Import the `IntlModule`:

```typescript
import {NgModule} from '@angular/core';
import {IntlModule} from 'angular-ecmascript-intl';

@NgModule({
  imports: [
    IntlModule,
  ],
})
export class MyModule {
}
```

By default, the pipe will use the browser default locale. If you want to override it, you can provide the `INTL_LOCALES`
injection token:

```typescript
import {NgModule} from '@angular/core';
import {INTL_LOCALES} from 'angular-ecmascript-intl';

@NgModule({
  providers: [
    {
      provide: INTL_LOCALES,
      useValue: 'de-DE',
    },
  ],
})
export class MyModule {
}
```

Now you can use the pipes, see below.

## Pipes

### Date Pipe

Use the date pipe like the following:

```
{{myDate | intlDate: options}}
```

The input date can be one of the following:

* `Date` object
* number (UNIX timestamp)
* string (will be parsed by `new Date()` constructor)
* null
* undefined

The options are the same as the options for `new Intl.DateTimeFormat()`. For a list of the options, see
their [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

With the `INTL_DATE_PIPE_DEFAULT_OPTIONS` injection token you can specify default options.

### Language pipe

Use the language pipe like the following:

```
{{'en-US' | intlLanguage: options}}
```

The input date can be one of the following:

* string (must be a BCP 47 IETF language tag)
* null
* undefined

The options are the same as the options for `new Intl.DisplayNames()`. For a list of the options, see
their [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames).

With the `INTL_LANGUAGE_PIPE_DEFAULT_OPTIONS` injection token you can specify default options.

## Background

Working with Angular's built-in pipes which support internationalization works fine when only supporting one locale.
But nowadays, you want to support many locales, to give every user a good user experience. To get this working with
Angular's built-in pipes can be time-consuming, because data for every locale must be included
to the application. This increases bundle size and load times.

Modern browsers are fully capable of handling internationalization with the `Intl.*` browser APIs. There is no need for
loading any locale date. This package re-implements some Angular built-in pipes such as `date` using these APIs.

## Feature Roadmap

* Country pipe
* Number pipe(s)
* Relative time

## Chore Roadmap

* Linting
* Pull request verification
* Automatic dependency updates
* Automatic npm publishing
* Automatic changelog generation
