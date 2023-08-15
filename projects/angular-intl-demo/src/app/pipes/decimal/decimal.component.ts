import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IntlDecimalPipe } from '../../../../../angular-ecmascript-intl/src/lib/decimal/intl-decimal.pipe';
import { languages } from '../../languages';

@Component({
  selector: 'app-decimal',
  templateUrl: './decimal.component.html',
  styleUrls: ['./decimal.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    NgFor,
    IntlDecimalPipe,
  ],
})
export class DecimalComponent {
  enteredNumber = '1024.4539';
  languages = languages;
  locale?: string;
  notation?: Intl.NumberFormatOptions['notation'];
  signDisplay?: Intl.NumberFormatOptions['signDisplay'];
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
