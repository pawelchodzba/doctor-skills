import { Component, OnInit,  Input, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ValidCountService } from '../count.service';

@Component({
  selector: 'app-result-flow',
  templateUrl: './result-flow.component.html',
  styleUrls: ['./result-flow.component.css']
})
export class ResultFlowComponent implements OnInit {
  @Input() result;
  ValueResult;
  Form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private validCountService: ValidCountService
  ) {}
ngOnInit(): void {
  this.Form = this.Flow();
}

Flow(): FormGroup {
  return this.formBuilder.group({
    name: 'result-flow',
    numVal: [{value: '', disabled: true}, true],
    time: '60'
    });
  }
}
