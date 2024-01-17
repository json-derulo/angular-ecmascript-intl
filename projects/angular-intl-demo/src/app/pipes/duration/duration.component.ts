import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  IntlDurationPipe,
  IntlDurationPipeOptions,
} from '../../../../../angular-ecmascript-intl/src/lib/duration/intl-duration.pipe';
import { languages } from '../../languages';

@Component({
  selector: 'app-duration',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    IntlDurationPipe,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
})
export class DurationComponent {
  languages = languages;
  years?: number = 5;
  months?: number = 2;
  weeks?: number;
  days?: number = 23;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  microseconds?: number;
  nanoseconds?: number;
  locale?: string;
  style: IntlDurationPipeOptions['style'];
}
