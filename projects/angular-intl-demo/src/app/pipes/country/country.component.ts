import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import {
  IntlCountryPipe,
  IntlCountryPipeOptions,
} from 'angular-ecmascript-intl';
import { languages } from '../../languages';
import { countries } from './countries';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  imports: [
    FormsModule,
    IntlCountryPipe,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
  ],
})
export class CountryComponent {
  languages = languages;
  countries = countries;
  selectedCountry = signal('DE');
  locale = signal<string | undefined>(undefined);
  options = computed<IntlCountryPipeOptions>(() => ({ locale: this.locale() }));
}
