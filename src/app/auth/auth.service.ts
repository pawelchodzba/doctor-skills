import { Injectable } from '@angular/core';
import { LayoutService } from '../shared/services/layout.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private credential = {
  login: '',
  password: ''
};
private isUserLoggedIn = false;


constructor(private layoutService: LayoutService) {}

submit(contextLoginComp, Gen) {
  if (contextLoginComp.login === this.credential.login && contextLoginComp.password === this.credential.password ) {
   setTimeout(() => {
    Gen.next(true);
    this.isUserLoggedIn = true;
    this.layoutService.showSidebar();
  } , 2);
  } else {
    setTimeout(() => {
      Gen.next(false);
      this.isUserLoggedIn = false;
    } , 2);
  }

}
logOut() {
  this.isUserLoggedIn = false;
  this.layoutService.hideSidebar();
}
userLoged() {
  return this.isUserLoggedIn;
}
}
