import {Component} from '@angular/core';
import {languages} from "../../languages";
import {list} from "./list";
import {IntlListPipeOptions} from "projects/angular-ecmascript-intl/src/lib/list/intl-list.pipe";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  languages = languages;
  list = list;
  selectedItems: string[] = [list[0], list[2], list[3]];
  locale?: string;
  type?: IntlListPipeOptions['type'];
  style?: IntlListPipeOptions['style'];
}
