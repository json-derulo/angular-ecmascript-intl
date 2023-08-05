import { Inject, Optional, Pipe, PipeTransform } from '@angular/core';
import { IntlPipeOptions } from '../intl-pipe-options';
import { INTL_LOCALES } from '../locale';
import { INTL_LIST_PIPE_DEFAULT_OPTIONS } from './intl-list-pipe-default-options';

export type IntlListPipeOptions = Partial<Intl.ListFormatOptions> &
  IntlPipeOptions;

@Pipe({
  name: 'intlList',
  standalone: true,
})
export class IntlListPipe implements PipeTransform {
  constructor(
    @Optional()
    @Inject(INTL_LOCALES)
    readonly locale?: string | string[] | null,
    @Optional()
    @Inject(INTL_LIST_PIPE_DEFAULT_OPTIONS)
    readonly defaultOptions?: Omit<IntlListPipeOptions, 'locale'> | null,
  ) {}

  transform(
    value: Iterable<string> | null | undefined,
    options?: IntlListPipeOptions,
  ): string | null {
    if (!value) {
      return null;
    }

    const { locale, ...intlOptions } = options ?? {};

    try {
      return new Intl.ListFormat(locale ?? this.locale ?? undefined, {
        ...this.defaultOptions,
        ...intlOptions,
      }).format(value);
    } catch (e) {
      console.error('Error while transforming the list', e);
      return null;
    }
  }
}
