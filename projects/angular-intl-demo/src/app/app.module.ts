import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {IntlModule} from "projects/angular-ecmascript-intl/src/public-api";
import {DateComponent} from './date/date.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MarkdownModule} from "ngx-markdown";
import {HttpClientModule} from "@angular/common/http";
import {LanguageComponent} from './language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    LanguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    IntlModule,
    MatSelectModule,
    FormsModule,
    MatSlideToggleModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic',
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
