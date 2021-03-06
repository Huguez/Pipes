import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';

import { Capitalizado } from './pipes/capitalizado.pipe';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';
import localize from '@angular/common/locales/es';

// the second parameter 'fr' is optional
registerLocaleData(localize, 'es-MX');


@NgModule({
  declarations: [
    AppComponent,
    Capitalizado,
    DomseguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-MX' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
