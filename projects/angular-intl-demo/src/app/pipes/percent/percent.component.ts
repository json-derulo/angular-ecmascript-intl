import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import {
  IntlPercentPipe,
  IntlPercentPipeOptions,
} from 'angular-ecmascript-intl';
import { languages } from '../../languages';

@Component({
  selector: 'app-percent',
  templateUrl: './percent.component.html',
  styleUrls: ['./percent.component.scss'],
  imports: [
    FormsModule,
    IntlPercentPipe,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel,
    MatError,
  ],
})
export class PercentComponent {
  enteredNumber = signal('0.24');
  languages = languages;
  locale = signal<string | undefined>(undefined);
  notation = signal<IntlPercentPipeOptions['notation']>(undefined);
  signDisplay = signal<IntlPercentPipeOptions['signDisplay']>(undefined);
  minimumIntegerDigits = signal<
    IntlPercentPipeOptions['minimumIntegerDigits'] | null
  >(undefined);
  minimumFractionDigits = signal<
    IntlPercentPipeOptions['minimumFractionDigits'] | null
  >(undefined);
  maximumFractionDigits = signal<
    IntlPercentPipeOptions['maximumFractionDigits'] | null
  >(undefined);
  minimumSignificantDigits = signal<
    IntlPercentPipeOptions['minimumSignificantDigits'] | null
  >(undefined);
  maximumSignificantDigits = signal<
    IntlPercentPipeOptions['maximumSignificantDigits'] | null
  >(undefined);
  options = computed<IntlPercentPipeOptions>(() => ({
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
