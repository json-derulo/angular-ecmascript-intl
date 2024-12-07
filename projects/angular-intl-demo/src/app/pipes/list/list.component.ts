import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IntlListPipe, IntlListPipeOptions } from 'angular-ecmascript-intl';
import { languages } from '../../languages';
import { list } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
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
  selectedItems = signal([list[0], list[2], list[3]]);
  locale = signal<string | undefined>(undefined);
  type = signal<IntlListPipeOptions['type']>(undefined);
  style = signal<IntlListPipeOptions['style']>(undefined);
  options = computed<IntlListPipeOptions>(() => ({
    locale: this.locale(),
    type: this.type(),
    style: this.style(),
  }));
}
