import { Component } from '@angular/core';
import { languages } from '../../languages';
import { getDateString } from '../date-utils';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
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
