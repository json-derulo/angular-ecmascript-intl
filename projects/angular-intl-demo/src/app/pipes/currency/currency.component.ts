import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import {
  IntlCurrencyPipe,
  IntlCurrencyPipeOptions,
} from 'angular-ecmascript-intl';
import { languages } from '../../languages';
import { currencies } from './currencies';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  imports: [
    FormsModule,
    IntlCurrencyPipe,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel,
    MatError,
  ],
})
export class CurrencyComponent {
  enteredNumber = signal('0.24');
  currency = signal('USD');
  languages = languages;
  currencies = currencies;
  locale = signal<string | undefined>(undefined);
  notation = signal<IntlCurrencyPipeOptions['notation']>(undefined);
  signDisplay = signal<IntlCurrencyPipeOptions['signDisplay']>(undefined);
  currencyDisplay =
    signal<IntlCurrencyPipeOptions['currencyDisplay']>(undefined);
  currencySign = signal<IntlCurrencyPipeOptions['currencySign']>(undefined);
  minimumIntegerDigits = signal<
    IntlCurrencyPipeOptions['minimumIntegerDigits'] | null
  >(undefined);
  minimumFractionDigits = signal<
    IntlCurrencyPipeOptions['minimumFractionDigits'] | null
  >(undefined);
  maximumFractionDigits = signal<
    IntlCurrencyPipeOptions['maximumFractionDigits'] | null
  >(undefined);
  minimumSignificantDigits = signal<
    IntlCurrencyPipeOptions['minimumSignificantDigits'] | null
  >(undefined);
  maximumSignificantDigits = signal<
    IntlCurrencyPipeOptions['maximumSignificantDigits'] | null
  >(undefined);
  options = computed<IntlCurrencyPipeOptions>(() => ({
    locale: this.locale(),
    currencyDisplay: this.currencyDisplay(),
    currencySign: this.currencySign(),
    notation: this.notation(),
    signDisplay: this.signDisplay(),
    minimumIntegerDigits: this.minimumIntegerDigits() ?? undefined,
    minimumFractionDigits: this.minimumFractionDigits() ?? undefined,
    maximumFractionDigits: this.maximumFractionDigits() ?? undefined,
    minimumSignificantDigits: this.minimumSignificantDigits() ?? undefined,
    maximumSignificantDigits: this.maximumSignificantDigits() ?? undefined,
  }));
}
