import {Component} from '@angular/core';
import {languages} from "./languages";
import {IntlLanguagePipeOptions} from "projects/angular-ecmascript-intl/src/lib/language/intl-language.pipe";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  languages = languages;
  selectedLanguage = 'de-DE';
  languageDisplay?: IntlLanguagePipeOptions['languageDisplay'];
}
