import { Component, OnInit, EventEmitter, Input} from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ValidCountService } from '../count.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {
  Form: FormGroup;
  @Input() disabled: Boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private validCountService: ValidCountService
  ) {}

  ngOnInit(): void {
    this.Form = this.Weight();
  }
  Weight(): FormGroup {
    return this.formBuilder.group({
      name: 'weight',
      numVal: ['', this.validCountService.onlyNumber],
    });
  }
 }
