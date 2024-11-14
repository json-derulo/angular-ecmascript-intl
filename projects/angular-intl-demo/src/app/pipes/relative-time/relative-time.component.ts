import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IntlRelativeTimePipeOptions } from 'projects/angular-ecmascript-intl/src/lib/relative-time/relative-time.pipe';
import { IntlRelativeTimePipe } from '../../../../../angular-ecmascript-intl/src/lib/relative-time/relative-time.pipe';
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
  selectedDate = getDateString(new Date(new Date().getTime() - 60000));
  languages = languages;
  numeric?: IntlRelativeTimePipeOptions['numeric'];
  style?: IntlRelativeTimePipeOptions['style'];
  locale?: IntlRelativeTimePipeOptions['locale'];
}
