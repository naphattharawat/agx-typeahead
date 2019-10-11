import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AgxTypeAheadComponent } from './agx-typeahead.component';

@NgModule({
  declarations: [AgxTypeAheadComponent],
  exports: [AgxTypeAheadComponent, CommonModule],
  imports: [CommonModule, HttpClientModule, HttpClientJsonpModule],
  providers: []
})
export class AgxTypeaheadModule { }
