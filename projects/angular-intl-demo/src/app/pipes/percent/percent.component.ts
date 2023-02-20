import {Component} from '@angular/core';
import {languages} from '../../languages';

@Component({
  selector: 'app-percent',
  templateUrl: './percent.component.html',
  styleUrls: ['./percent.component.scss'],
})
export class PercentComponent {
  enteredNumber = '0.24';
  languages = languages;
  locale?: string;
  notation?: Intl.NumberFormatOptions['notation'];
  signDisplay?: Intl.NumberFormatOptions['signDisplay'];
  minimumIntegerDigits?: Intl.NumberFormatOptions['minimumIntegerDigits'] | null;
  minimumFractionDigits?: Intl.NumberFormatOptions['minimumFractionDigits'] | null;
  maximumFractionDigits?: Intl.NumberFormatOptions['maximumFractionDigits'] | null;
  minimumSignificantDigits?: Intl.NumberFormatOptions['minimumSignificantDigits'] | null;
  maximumSignificantDigits?: Intl.NumberFormatOptions['maximumSignificantDigits'] | null;
}
