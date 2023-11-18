import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IntlDatePipe } from '../../../../../angular-ecmascript-intl/src/lib/date/intl-date.pipe';
import { languages } from '../../languages';
import { getDateString } from '../date-utils';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    IntlDatePipe,
  ],
})
export class DateComponent {
  languages = languages;
  selectedDate = getDateString();
  dateStyle: Intl.DateTimeFormatOptions['dateStyle'];
  timeStyle: Intl.DateTimeFormatOptions['timeStyle'];
  hour12: Intl.DateTimeFormatOptions['hour12'];
  dayPeriod: Intl.DateTimeFormatOptions['dayPeriod'];
  locale?: string;
}
