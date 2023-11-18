import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IntlUnitPipe } from '../../../../../angular-ecmascript-intl/src/lib/unit/intl-unit.pipe';
import { languages } from '../../languages';
import { units } from './units';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    IntlUnitPipe,
  ],
})
export class UnitComponent {
  enteredNumber = '1';
  selectedUnit = 'hour';
  languages = languages;
  units = units;
  locale?: string;
  notation?: Intl.NumberFormatOptions['notation'];
  signDisplay?: Intl.NumberFormatOptions['signDisplay'];
  unitDisplay?: Intl.NumberFormatOptions['unitDisplay'];
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
