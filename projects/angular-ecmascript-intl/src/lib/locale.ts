import {InjectionToken} from "@angular/core";

/**
 * Set the locale(s) for all Intl Pipes. If not specified, the user language specified in the browser will be used. If
 * specified, it needs to be a string with a BCP 47 language tag, or an array of such strings.
 */
export const INTL_LOCALES = new InjectionToken<string | string[] | undefined>('IntlLocales');
