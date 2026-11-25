import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlFormatOptions, IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { INTL_LANGUAGE_PIPE_DEFAULT_OPTIONS } from './intl-language-pipe-default-options';

export type IntlLanguagePipeOptions = Partial<Intl.DisplayNamesOptions> &
  IntlPipeOptions;

@Pipe({
  name: 'intlLanguage',
})
export class IntlLanguagePipe implements PipeTransform {
  private readonly locale? = inject(INTL_LOCALES, { optional: true });
  private readonly defaultOptions? = inject<Omit<
    IntlLanguagePipeOptions,
    'locale'
  > | null>(INTL_LANGUAGE_PIPE_DEFAULT_OPTIONS, { optional: true });

  transform(
    value: string | null | undefined,
    options?: IntlLanguagePipeOptions,
  ): string | null {
    return intlFormatLanguage(value, {
      ...this.defaultOptions,
      ...options,
      locale: options?.locale ?? this.locale ?? undefined,
    });
  }
}

/**
 * Formats a language tag as a localized language name.
 *
 * @param value A language tag such as `fr` or `en-US`.
 * @param options Formatting options. The locale defaults to the runtime locale.
 * @returns The formatted value, or `null` if the input is absent or cannot be formatted.
 */
export function intlFormatLanguage(
  value: string | null | undefined,
  options?: IntlFormatOptions<IntlLanguagePipeOptions>,
): string | null {
  if (!value) {
    return null;
  }

  const { locale, ...intlOptions } = options ?? {};

  try {
    return (
      new Intl.DisplayNames(locale, {
        ...intlOptions,
        type: 'language',
      }).of(value) ?? null
    );
  } catch (e) {
    console.error('Error while transforming the language', e);
    return null;
  }
}
