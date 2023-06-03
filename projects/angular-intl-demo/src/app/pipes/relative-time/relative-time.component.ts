import {Component} from '@angular/core';
import {IntlRelativeTimePipeOptions} from "projects/angular-ecmascript-intl/src/lib/relative-time/relative-time.pipe";
import {languages} from "../../languages";
import {getDateString} from "../date-utils";

@Component({
  selector: 'app-relative-time',
  templateUrl: './relative-time.component.html',
  styleUrls: ['./relative-time.component.scss'],
})
export class RelativeTimeComponent {
  selectedDate = getDateString(new Date(new Date().getTime() - 60000));
  languages = languages;
  numeric?: IntlRelativeTimePipeOptions['numeric'];
  style?: IntlRelativeTimePipeOptions['style'];
  locale?: IntlRelativeTimePipeOptions['locale'];
}
