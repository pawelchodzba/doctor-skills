import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {BrowsersComponent} from './search-diagnosis/browsers/browsers.component';
import {FlowComponent} from './count-dose/flow/flow.component';

const APP_ROUTS: Route[] = [
  {path: 'search-diagnosis', component: <any>BrowsersComponent },
  {path: '', pathMatch: 'full', redirectTo: 'search-diagnosis'},
  {path: 'count-dose', component: <any> FlowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTS)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
