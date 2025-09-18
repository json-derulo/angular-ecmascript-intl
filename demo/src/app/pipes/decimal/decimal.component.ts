import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import {
  IntlDecimalPipe,
  IntlDecimalPipeOptions,
} from 'angular-ecmascript-intl';
import { languages } from '../../languages';

@Component({
  selector: 'app-decimal',
  templateUrl: './decimal.component.html',
  styleUrls: ['./decimal.component.scss'],
  imports: [
    FormsModule,
    IntlDecimalPipe,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel,
    MatError,
  ],
})
export class DecimalComponent {
  enteredNumber = signal('1024.4539');
  languages = languages;
  locale = signal<string | undefined>(undefined);
  notation = signal<IntlDecimalPipeOptions['notation']>(undefined);
  signDisplay = signal<IntlDecimalPipeOptions['signDisplay']>(undefined);
  minimumIntegerDigits = signal<
    IntlDecimalPipeOptions['minimumIntegerDigits'] | null
  >(undefined);
  minimumFractionDigits = signal<
    IntlDecimalPipeOptions['minimumFractionDigits'] | null
  >(undefined);
  maximumFractionDigits = signal<
    IntlDecimalPipeOptions['maximumFractionDigits'] | null
  >(undefined);
  minimumSignificantDigits = signal<
    IntlDecimalPipeOptions['minimumSignificantDigits'] | null
  >(undefined);
  maximumSignificantDigits = signal<
    IntlDecimalPipeOptions['maximumSignificantDigits'] | null
  >(undefined);
  options = computed<IntlDecimalPipeOptions>(() => ({
    locale: this.locale(),
    notation: this.notation(),
    signDisplay: this.signDisplay(),
    minimumIntegerDigits: this.minimumIntegerDigits() ?? undefined,
    minimumFractionDigits: this.minimumFractionDigits() ?? undefined,
    maximumFractionDigits: this.maximumFractionDigits() ?? undefined,
    minimumSignificantDigits: this.minimumSignificantDigits() ?? undefined,
    maximumSignificantDigits: this.maximumSignificantDigits() ?? undefined,
  }));
}
