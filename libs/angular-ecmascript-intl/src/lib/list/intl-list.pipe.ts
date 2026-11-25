import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlFormatOptions, IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { INTL_LIST_PIPE_DEFAULT_OPTIONS } from './intl-list-pipe-default-options';

export type IntlListPipeOptions = Partial<Intl.ListFormatOptions> &
  IntlPipeOptions;

@Pipe({
  name: 'intlList',
})
export class IntlListPipe implements PipeTransform {
  private readonly locale? = inject(INTL_LOCALES, { optional: true });
  private readonly defaultOptions? = inject<Omit<
    IntlListPipeOptions,
    'locale'
  > | null>(INTL_LIST_PIPE_DEFAULT_OPTIONS, { optional: true });

  transform(
    value: Iterable<string> | null | undefined,
    options?: IntlListPipeOptions,
  ): string | null {
    return intlFormatList(value, {
      ...this.defaultOptions,
      ...options,
      locale: options?.locale ?? this.locale ?? undefined,
    });
  }
}

/**
 * Formats a list using localized separators and conjunctions.
 *
 * @param value An iterable of strings to format.
 * @param options Formatting options. The locale defaults to the runtime locale.
 * @returns The formatted value, or `null` if the input is absent or cannot be formatted.
 */
export function intlFormatList(
  value: Iterable<string> | null | undefined,
  options?: IntlFormatOptions<IntlListPipeOptions>,
): string | null {
  if (!value) {
    return null;
  }

  const { locale, ...intlOptions } = options ?? {};

  try {
    return new Intl.ListFormat(locale, intlOptions).format(value);
  } catch (e) {
    console.error('Error while transforming the list', e);
    return null;
  }
}
