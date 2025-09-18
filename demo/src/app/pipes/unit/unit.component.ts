import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { IntlUnitPipe, IntlUnitPipeOptions } from 'angular-ecmascript-intl';
import { languages } from '../../languages';
import { units } from './units';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  imports: [
    FormsModule,
    IntlUnitPipe,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel,
    MatError,
  ],
})
export class UnitComponent {
  enteredNumber = signal('1');
  selectedUnit = signal('hour');
  languages = languages;
  units = units;
  locale = signal<string | undefined>(undefined);
  notation = signal<IntlUnitPipeOptions['notation']>(undefined);
  signDisplay = signal<IntlUnitPipeOptions['signDisplay']>(undefined);
  unitDisplay = signal<IntlUnitPipeOptions['unitDisplay']>(undefined);
  minimumIntegerDigits = signal<
    IntlUnitPipeOptions['minimumIntegerDigits'] | null
  >(undefined);
  minimumFractionDigits = signal<
    IntlUnitPipeOptions['minimumFractionDigits'] | null
  >(undefined);
  maximumFractionDigits = signal<
    IntlUnitPipeOptions['maximumFractionDigits'] | null
  >(undefined);
  minimumSignificantDigits = signal<
    IntlUnitPipeOptions['minimumSignificantDigits'] | null
  >(undefined);
  maximumSignificantDigits = signal<
    IntlUnitPipeOptions['maximumSignificantDigits'] | null
  >(undefined);
  options = computed<IntlUnitPipeOptions>(() => ({
    locale: this.locale(),
    notation: this.notation(),
    signDisplay: this.signDisplay(),
    unitDisplay: this.unitDisplay(),
    minimumIntegerDigits: this.minimumIntegerDigits() ?? undefined,
    minimumFractionDigits: this.minimumFractionDigits() ?? undefined,
    maximumFractionDigits: this.maximumFractionDigits() ?? undefined,
    minimumSignificantDigits: this.minimumSignificantDigits() ?? undefined,
    maximumSignificantDigits: this.maximumSignificantDigits() ?? undefined,
  }));
}
