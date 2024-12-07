import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  IntlRelativeTimePipe,
  IntlRelativeTimePipeOptions,
} from 'angular-ecmascript-intl';
import { languages } from '../../languages';
import { getDateString } from '../date-utils';

@Component({
  selector: 'app-relative-time',
  templateUrl: './relative-time.component.html',
  styleUrls: ['./relative-time.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    IntlRelativeTimePipe,
  ],
})
export class RelativeTimeComponent {
  selectedDate = signal(getDateString(new Date(new Date().getTime() - 60000)));
  languages = languages;
  numeric = signal<IntlRelativeTimePipeOptions['numeric']>(undefined);
  style = signal<IntlRelativeTimePipeOptions['style']>(undefined);
  locale = signal<IntlRelativeTimePipeOptions['locale']>(undefined);
  options = computed<IntlRelativeTimePipeOptions>(() => ({
    locale: this.locale(),
    numeric: this.numeric(),
    style: this.style(),
  }));
}
