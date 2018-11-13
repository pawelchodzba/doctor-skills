import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidCountService {

  replaceComa(value: string): string {
      return value.replace(',', '.');
    }
  // float(string) {
  //  return parseFloat(string);
  // }
  onlyNumber(control: AbstractControl) {
    const value = control.value || '';
    const regExp = value.match(/^\d+[,.]?\d*$/);
    return regExp ?  null :  {noNumber: true};
  }
  validFormsArr(formsArr) {
    for (let i = 0; i < formsArr.length; i++) {
      if (!formsArr[i].Form.valid) {
        return;
      }
    }
    return true;
  }

}




export class CountFlowService {

  time(ArrForms) {
    const Dose = this.doseCreate(ArrForms);
    const Weight = this.weightCreate(ArrForms);
    const Volume = this.volumeCreate(ArrForms);
    const Flow = this.flowCreate(ArrForms);

    const countDoseTotal = this.valTimeVal(Dose.value);
    !Dose.weight ? Weight.value = 1 : Weight.value = Weight.value;
    const doseTotal = countDoseTotal (Weight.value);

    const countDoseTimeTime = this.valTimeVal(Dose.time / 60);
    const doseTimeTime = countDoseTimeTime(Volume.value);

    const countResult = this.valDivideVal(doseTimeTime);
    return countResult(doseTotal);

  }
  valTimeVal(Val2) {
      return function(Val1) {
        return Val2 * Val1;
    };
  }
  valDivideVal(val1) {
    return function(val2) {
      return val1 / val2;
    };
  }
  doseCreate(ArrForms) {
    return {
            value: ArrForms[0].Form.value.numVal,
            concetration: ArrForms[0].Form.value.dose,
            weight: ArrForms[0].Form.value.kg,
            time: ArrForms[0].Form.value.time
            };
  }
  weightCreate(ArrForms) {
    return {
            value: ArrForms[1].Form.value.numVal
            };
  }
  volumeCreate(ArrForms) {
    return {
            value: ArrForms[2].Form.value.numVal
            };
  }
  flowCreate(ArrForms) {
    return {
            value: ArrForms[3].Form.value.numVal,
            time: ArrForms[3].Form.value.time
            };
  }

// function delay(time) {
//   return  (obj, prop, descriptor) => {
//     const delegate = descriptor.value;
//     descriptor.value = () => {
//       return Promise((resolve) => {
//         setTimeout(() => {
//           resolve(delegate.call(this)) ;
//         }, time);
//       });
//     };
//   };

}
