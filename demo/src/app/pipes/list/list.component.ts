import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { IntlListPipe, IntlListPipeOptions } from 'angular-ecmascript-intl';
import { languages } from '../../languages';
import { list } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    FormsModule,
    IntlListPipe,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
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
