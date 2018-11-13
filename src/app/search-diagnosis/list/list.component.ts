import { Component, Input, Output, EventEmitter } from '@angular/core';
import { objRes } from 'src/app/search-diagnosis/models/objRes';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 @Input() objList: objRes[];
 @Output() id: EventEmitter<string> = new EventEmitter<string>();

 selectRecord(e): void {
    this.id.emit(e.target.id);
    }

}
