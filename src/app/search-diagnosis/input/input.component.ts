import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  value: string;
 @Output() val: EventEmitter<string> = new EventEmitter<string>();
 @Input() findString;

  getVal(e): void {
    this.value = e.target.value;
  }
  sendVal(e): void {
    this.val.emit(e.target.value);
  }
}
