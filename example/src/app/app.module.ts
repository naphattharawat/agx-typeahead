import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgxTypeaheadModule } from 'agx-typeahead';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgxTypeaheadModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
