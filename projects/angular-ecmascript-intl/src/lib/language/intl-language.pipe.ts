import { Pipe, PipeTransform, inject } from '@angular/core';
import { IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { INTL_LANGUAGE_PIPE_DEFAULT_OPTIONS } from './intl-language-pipe-default-options';

export type IntlLanguagePipeOptions = Partial<Intl.DisplayNamesOptions> &
  IntlPipeOptions;

@Pipe({
  name: 'intlLanguage',
  standalone: true,
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
    if (!value) {
      return null;
    }

    const { locale, ...intlOptions } = options ?? {};

    try {
      return (
        new Intl.DisplayNames(locale ?? this.locale ?? undefined, {
          ...this.defaultOptions,
          ...intlOptions,
          type: 'language',
        }).of(value) ?? null
      );
    } catch (e) {
      console.error('Error while transforming the language', e);
      return null;
    }
  }
}
