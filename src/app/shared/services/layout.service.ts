import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  sidebarSorce$ = new Subject<boolean>();

  showSidebar() {
    this.sidebarSorce$.next(true);
  }
  hideSidebar() {
    this.sidebarSorce$.next(false);
  }
}
