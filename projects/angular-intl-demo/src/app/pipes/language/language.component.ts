import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatOptionModule,
    IntlLanguagePipe,
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
