import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowComponent } from './flow/flow.component';
import { ValidCountService, CountFlowService } from './count.service';
import { DoseComponent } from './dose/dose.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultFlowComponent } from './result-flow/result-flow.component';
import { WeightComponent } from './weight/weight.component';
import { VolumeComponent } from './volume/volume.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule
  ],
  exports: [ResultFlowComponent, DoseComponent, FlowComponent, WeightComponent, VolumeComponent],
  declarations: [FlowComponent, DoseComponent, ResultFlowComponent, WeightComponent, VolumeComponent],
  providers: [ValidCountService, CountFlowService]
})
export class CountDoseModule {  }
