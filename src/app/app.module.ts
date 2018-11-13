import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchDiagnosisModule } from './search-diagnosis/search-diagnosis.module';
import { SearchService } from './search-diagnosis/search.service';
import { CountDoseModule } from './count-dose/count-dose.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { BrowsersComponent } from './search-diagnosis/browsers/browsers.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SearchDiagnosisModule, CountDoseModule, CoreModule,  HttpModule, AppRoutingModule

    ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
