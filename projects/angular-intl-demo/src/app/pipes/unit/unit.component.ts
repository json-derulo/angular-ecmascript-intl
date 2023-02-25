import {Component} from '@angular/core';
import {languages} from '../../languages';
import {units} from "./units";

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
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
  minimumIntegerDigits?: Intl.NumberFormatOptions['minimumIntegerDigits'] | null;
  minimumFractionDigits?: Intl.NumberFormatOptions['minimumFractionDigits'] | null;
  maximumFractionDigits?: Intl.NumberFormatOptions['maximumFractionDigits'] | null;
  minimumSignificantDigits?: Intl.NumberFormatOptions['minimumSignificantDigits'] | null;
  maximumSignificantDigits?: Intl.NumberFormatOptions['maximumSignificantDigits'] | null;
}
