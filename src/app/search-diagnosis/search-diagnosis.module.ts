import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowsersComponent } from './browsers/browsers.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { OutputComponent } from './output/output.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
   exports: [BrowsersComponent, InputComponent, ListComponent, OutputComponent],
  declarations: [BrowsersComponent, InputComponent, ListComponent, OutputComponent]
})
export class SearchDiagnosisModule { }
