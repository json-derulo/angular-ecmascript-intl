import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import {
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { IntlDatePipe, IntlDatePipeOptions } from 'angular-ecmascript-intl';
import { languages } from '../../languages';
import { getDateString } from '../date-utils';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  imports: [
    FormsModule,
    IntlDatePipe,
    MatFormField,
    MatInput,
    MatIconButton,
    MatIcon,
    MatSelect,
    MatOption,
    MatLabel,
    MatSuffix,
  ],
})
export class DateComponent {
  languages = languages;
  selectedDate = signal(getDateString());
  dateStyle = signal<IntlDatePipeOptions['dateStyle']>(undefined);
  timeStyle = signal<IntlDatePipeOptions['timeStyle']>(undefined);
  hour12 = signal<IntlDatePipeOptions['hour12']>(undefined);
  locale = signal<string | undefined>(undefined);
  options = computed<IntlDatePipeOptions>(() => ({
    locale: this.locale(),
    dateStyle: this.dateStyle(),
    timeStyle: this.timeStyle(),
    hour12: this.hour12(),
  }));
}
