import { Component, OnInit, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ValidCountService } from '../count.service';
@Component({
  selector: 'app-dose',
  templateUrl: './dose.component.html',
  styleUrls: ['./dose.component.css']
})
export class DoseComponent implements OnInit {
  Form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private validCountService: ValidCountService
  ) {}

  ngOnInit(): void {
    this.Form = this.Dose();
    }
  Dose(): FormGroup {
    return this.formBuilder.group({
      name: 'dose',
      numVal: ['', this.validCountService.onlyNumber],
      dose: 'mlg',
      kg: true,
      time: '60',
    });
  }
 }
