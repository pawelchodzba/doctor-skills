import { Component, OnInit, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ValidCountService } from '../count.service';
@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {
  Form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private validCountService: ValidCountService
  ) {}

  ngOnInit(): void {
    this.Form = this.Volume();
  }
  Volume(): FormGroup {
    return this.formBuilder.group({
      name: 'volume',
      numVal: ['', this.validCountService.onlyNumber],
    });
  }
}
