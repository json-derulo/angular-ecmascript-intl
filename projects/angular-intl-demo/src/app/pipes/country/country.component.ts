import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IntlCountryPipe } from '../../../../../angular-ecmascript-intl/src/lib/country/intl-country.pipe';
import { languages } from '../../languages';
import { countries } from './countries';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    NgFor,
    MatOptionModule,
    IntlCountryPipe,
  ],
})
export class CountryComponent {
  languages = languages;
  countries = countries;
  selectedCountry = 'DE';
  locale?: string;
}
