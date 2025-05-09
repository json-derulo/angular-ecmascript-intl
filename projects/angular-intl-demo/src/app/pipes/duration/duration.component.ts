import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import {
  IntlDurationPipe,
  IntlDurationPipeOptions,
} from 'angular-ecmascript-intl';
import { languages } from '../../languages';

@Component({
  selector: 'app-duration',
  imports: [
    IntlDurationPipe,
    FormsModule,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel,
  ],
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
})
export class DurationComponent {
  languages = languages;
  years = signal(5);
  months = signal(2);
  weeks = signal<number | undefined>(undefined);
  days = signal(23);
  hours = signal<number | undefined>(undefined);
  minutes = signal<number | undefined>(undefined);
  seconds = signal<number | undefined>(undefined);
  milliseconds = signal<number | undefined>(undefined);
  microseconds = signal<number | undefined>(undefined);
  nanoseconds = signal<number | undefined>(undefined);
  locale = signal<string | undefined>(undefined);
  style = signal<IntlDurationPipeOptions['style']>(undefined);
  value = computed(() => ({
    years: this.years(),
    months: this.months(),
    weeks: this.weeks(),
    days: this.days(),
    hours: this.hours(),
    minutes: this.minutes(),
    seconds: this.seconds(),
    milliseconds: this.milliseconds(),
    microseconds: this.microseconds(),
  }));
  options = computed<IntlDurationPipeOptions>(() => ({
    locale: this.locale(),
    style: this.style(),
  }));
}
