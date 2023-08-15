import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  IntlLanguagePipe,
  IntlLanguagePipeOptions,
} from '../../../../../angular-ecmascript-intl/src/lib/language/intl-language.pipe';
import { languages } from '../../languages';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    NgFor,
    MatOptionModule,
    IntlLanguagePipe,
  ],
})
export class LanguageComponent {
  languages = languages;
  selectedLanguage = 'de-DE';
  languageDisplay?: IntlLanguagePipeOptions['languageDisplay'];
  locale?: string;
}
