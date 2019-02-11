import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: Router

  ) { }

  ngOnInit() {
  }
  logOut() {
    this.authService.logOut();
    this.route.navigate(['/login']);
  }
}
