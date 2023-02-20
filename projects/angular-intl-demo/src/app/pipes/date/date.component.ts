import {Component} from '@angular/core';
import {languages} from '../../languages';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  languages = languages;
  selectedDate = new Date();
  dateStyle: Intl.DateTimeFormatOptions['dateStyle'];
  timeStyle: Intl.DateTimeFormatOptions['timeStyle'];
  hour12: Intl.DateTimeFormatOptions['hour12'];
  locale?: string;
}
