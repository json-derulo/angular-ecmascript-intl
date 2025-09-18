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
    FormsModule,
    IntlRelativeTimePipe,
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
