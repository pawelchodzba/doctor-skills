import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
login = '';
password = '';
GenObj ;
  constructor(private authService: AuthService, private router: Router) { }

*getCredential() {

  if (yield  this.authService.submit(this, this.GenObj)) {
    this.router.navigate(['/']);
  } else {
    console.log('nie zalogowany');
  }
}
onSubmit() {
 this.GenObj = this.getCredential();
 this.GenObj.next();
}
}
