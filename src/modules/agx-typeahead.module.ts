import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { AgxTypeAheadComponent } from './agx-typeahead.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AgxTypeAheadComponent],
  exports: [AgxTypeAheadComponent, CommonModule],
  imports: [CommonModule, HttpClientModule, JsonpModule],
  providers: []
})
export class AgxTypeaheadModule { }
