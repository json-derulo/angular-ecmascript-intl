import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IntlListPipeOptions } from 'projects/angular-ecmascript-intl/src/lib/list/intl-list.pipe';
import { IntlListPipe } from '../../../../../angular-ecmascript-intl/src/lib/list/intl-list.pipe';
import { languages } from '../../languages';
import { list } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatOptionModule,
    IntlListPipe,
  ],
})
export class ListComponent {
  languages = languages;
  list = list;
  selectedItems: string[] = [list[0], list[2], list[3]];
  locale?: string;
  type?: IntlListPipeOptions['type'];
  style?: IntlListPipeOptions['style'];
}
