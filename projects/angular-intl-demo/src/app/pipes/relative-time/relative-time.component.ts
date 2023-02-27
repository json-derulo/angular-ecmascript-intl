import {Component} from '@angular/core';
import {IntlRelativeTimePipeOptions} from "projects/angular-ecmascript-intl/src/lib/relative-time/relative-time.pipe";
import {languages} from "../../languages";

@Component({
  selector: 'app-relative-time',
  templateUrl: './relative-time.component.html',
  styleUrls: ['./relative-time.component.scss'],
})
export class RelativeTimeComponent {
  selectedDate = new Date();
  languages = languages;
  numeric?: IntlRelativeTimePipeOptions['numeric'];
  style?: IntlRelativeTimePipeOptions['style'];
  locale?: IntlRelativeTimePipeOptions['locale'];
}
