import { Component } from '@angular/core';
import { languages } from '../../languages';
import { countries } from './countries';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {
  languages = languages;
  countries = countries;
  selectedCountry = 'DE';
  locale?: string;
}
