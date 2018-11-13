import { Component, DoCheck, ViewChildren, QueryList } from '@angular/core';
import { ValidCountService, CountFlowService } from '../count.service';
import {FormGroup } from '@angular/forms';
import { DoseComponent } from '../dose/dose.component';




@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],

})
export class FlowComponent implements  DoCheck {
  result: string;
  disablWeight: Boolean = false;

  @ViewChildren('refInputs') refInputs: QueryList<any>;
  constructor(private validCountService: ValidCountService, private countFlowService: CountFlowService) { }

   ngDoCheck() {
    try {
      this.checkValid();
    } catch (error) {
      console.log(error);
      return;
    }
  }
  checkValid(): void {
    const formsArr: FormGroup[] = this.refInputs.toArray();
    this.disabledKg(formsArr[0]);
      if (this.validCountService.validFormsArr(formsArr)) {
          this.getResult(formsArr);
      } else {
        this.result = '';
      }
  }

  getResult(formsArr: FormGroup[]): void {
    this.result = this.count(formsArr).toString();
  }
  count(formsArr: FormGroup[]): number {
    return this.countFlowService.time(formsArr);
  }
  disabledKg(Kg) {
    this.disablWeight = !Kg.Form.value.kg;

  }

}
// function delay(time) {console.log(time);
//   return  (obj, prop, descriptor) => {console.log(descriptor.value)
//     const delegate = descriptor.value;
//     descriptor.value = () => {
//       return new Promise ((resolve) => {console.log('trgrg');
//         setTimeout(() => {
//           resolve(delegate.call(this)) ;
//         }, time);
//       });console.log('time');
//     //return p;
//     };

//   };
//   }
