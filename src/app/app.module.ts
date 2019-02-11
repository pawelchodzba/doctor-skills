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
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { LayoutService } from './shared/services/layout.service';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    SearchDiagnosisModule,
    CountDoseModule,
    CoreModule,
    HttpModule,
    AppRoutingModule,
    LoginRoutingModule,
    LoginModule

    ],
  providers: [SearchService, AuthService, AuthGuard, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
