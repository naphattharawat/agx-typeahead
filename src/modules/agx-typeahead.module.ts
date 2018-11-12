import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { AgxTypeAheadComponent } from './agx-typeahead.component';

@NgModule({
  declarations: [AgxTypeAheadComponent],
  exports: [AgxTypeAheadComponent, CommonModule],
  imports: [CommonModule, HttpModule, JsonpModule],
  providers: []
})
export class AgxTypeaheadModule {}
