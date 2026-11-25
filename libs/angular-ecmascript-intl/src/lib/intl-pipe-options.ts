export interface IntlPipeOptions {
  locale?: string;
}

/** Formatter options accept an ordered list of locale preferences as well as a single locale. */
export type IntlFormatOptions<T extends IntlPipeOptions> = Omit<T, 'locale'> & {
  locale?: string | string[];
};
