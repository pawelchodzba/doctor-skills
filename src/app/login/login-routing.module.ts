import {RouterModule, Route } from '@angular/router';
import {LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

const LOGIN_ROUTS: Route[] = [
  {
    path: 'login',
    component: <any> LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(LOGIN_ROUTS)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule {}
