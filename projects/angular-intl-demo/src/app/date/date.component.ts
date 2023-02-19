import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {
  selectedDate = new Date();
  dateStyle: Intl.DateTimeFormatOptions['dateStyle'];
  timeStyle: Intl.DateTimeFormatOptions['timeStyle'];
  hour12: Intl.DateTimeFormatOptions['hour12'];
}
