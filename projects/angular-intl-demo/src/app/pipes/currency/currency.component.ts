import { Component } from '@angular/core';
import { languages } from '../../languages';
import { currencies } from './currencies';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent {
  enteredNumber = '0.24';
  currency = 'USD';
  languages = languages;
  currencies = currencies;
  locale?: string;
  notation?: Intl.NumberFormatOptions['notation'];
  signDisplay?: Intl.NumberFormatOptions['signDisplay'];
  currencyDisplay?: Intl.NumberFormatOptions['currencyDisplay'];
  currencySign?: Intl.NumberFormatOptions['currencySign'];
  minimumIntegerDigits?:
    | Intl.NumberFormatOptions['minimumIntegerDigits']
    | null;
  minimumFractionDigits?:
    | Intl.NumberFormatOptions['minimumFractionDigits']
    | null;
  maximumFractionDigits?:
    | Intl.NumberFormatOptions['maximumFractionDigits']
    | null;
  minimumSignificantDigits?:
    | Intl.NumberFormatOptions['minimumSignificantDigits']
    | null;
  maximumSignificantDigits?:
    | Intl.NumberFormatOptions['maximumSignificantDigits']
    | null;
}
