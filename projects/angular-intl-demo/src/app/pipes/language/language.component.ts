import { Component } from '@angular/core';
import { IntlLanguagePipeOptions } from '../../../../../angular-ecmascript-intl/src/lib/language/intl-language.pipe';
import { languages } from '../../languages';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {
  languages = languages;
  selectedLanguage = 'de-DE';
  languageDisplay?: IntlLanguagePipeOptions['languageDisplay'];
  locale?: string;
}
