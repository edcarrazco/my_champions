import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './dashboard/header/header.component';

const appRoutes: Routes = [
    {path: '', component: DashboardComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes),
      MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
