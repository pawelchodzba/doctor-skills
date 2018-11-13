import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { objRes } from 'src/app/search-diagnosis/models/objRes';


@Component({
  selector: 'app-browsers',
  templateUrl: './browsers.component.html',
  styleUrls: ['./browsers.component.css']
})
export class BrowsersComponent implements OnInit {
    val: string;
    fnGenerate;
    objResult: objRes[];
    fixedRemoveList: boolean;
    findString: string;
    fixedVal;
    constructor(private searchService: SearchService ) { }

    ngOnInit() {}


  *fetchInServis() {
    this.objResult = yield  this.searchService.getData(this.val, this.fnGenerate);
    this.viewList(true);
  }
  getVal(value: string): void {
    this.val = value;
    this.callGenerate();
  }
  callGenerate(): void {
    this.fnGenerate = this.fetchInServis();
    this.fnGenerate.next();
  }
  viewList(flag) {
    if (this.objResult.length) {this.fixedRemoveList = flag; }
  }
  idList(index) {
    if (index) {
     this.setValue(this.objResult[parseInt(index, 10)]);
    // this.setValue1(this.objResult[parseInt(index, 10)]);
     this.viewList(false);
    }
  }
  setValue(string) {
    this.findString = string;
    }
  // setValue1(string) {
  //   this.fixedVal = string;
  // }

}
