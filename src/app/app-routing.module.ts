import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {BrowsersComponent} from './search-diagnosis/browsers/browsers.component';
import {FlowComponent} from './count-dose/flow/flow.component';
import { AuthGuard } from './auth/auth.guard';

const APP_ROUTS: Route[] = [
  {path: 'search-diagnosis', component: <any>BrowsersComponent , canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'search-diagnosis', canActivate: [AuthGuard]},
  {path: 'count-dose', component: <any> FlowComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTS)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
