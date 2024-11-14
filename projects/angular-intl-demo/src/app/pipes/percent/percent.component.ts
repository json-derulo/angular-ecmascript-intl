import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IntlPercentPipe } from '../../../../../angular-ecmascript-intl/src/lib/percent/intl-percent.pipe';
import { languages } from '../../languages';

@Component({
  selector: 'app-percent',
  templateUrl: './percent.component.html',
  styleUrls: ['./percent.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    IntlPercentPipe,
  ],
})
export class PercentComponent {
  enteredNumber = '0.24';
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
