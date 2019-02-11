import { Component } from '@angular/core';
import { LayoutService } from './shared/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isSidebarVisible = false;

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.sidebarSorce$.subscribe((isVIew) => {
      this.isSidebarVisible = isVIew;
    });
  }
}
