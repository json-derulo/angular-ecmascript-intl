import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import {
  IntlLanguagePipe,
  IntlLanguagePipeOptions,
} from 'angular-ecmascript-intl';
import { languages } from '../../languages';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  imports: [
    FormsModule,
    IntlLanguagePipe,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
  ],
})
export class LanguageComponent {
  languages = languages;
  selectedLanguage = signal('de-DE');
  languageDisplay =
    signal<IntlLanguagePipeOptions['languageDisplay']>(undefined);
  locale = signal<string | undefined>(undefined);
  options = computed<IntlLanguagePipeOptions>(() => ({
    locale: this.locale(),
    languageDisplay: this.languageDisplay(),
  }));
}
