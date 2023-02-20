import {Component} from '@angular/core';
import {languages} from '../../languages';

@Component({
  selector: 'app-decimal',
  templateUrl: './decimal.component.html',
  styleUrls: ['./decimal.component.scss']
})
export class DecimalComponent {
  enteredNumber = '1024.4539';
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
