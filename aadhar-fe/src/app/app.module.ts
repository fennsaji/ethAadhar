import { HttpClientModule } from '@angular/common/http';
import { EthcontractService } from './services/ethcontract.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewAadharComponent } from './new-aadhar/new-aadhar.component';
import { HomeComponent } from './home/home.component';
import { AadhardetailsComponent } from './aadharsearch/aadhardetails/aadhardetails.component';
import { TakePicComponent } from './take-pic/take-pic.component';
import { AadharsearchComponent } from './aadharsearch/aadharsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewAadharComponent,
    HomeComponent,
    AadhardetailsComponent,
    TakePicComponent,
    AadharsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'newuser', component: NewAadharComponent},
      {path: 'search', component: AadharsearchComponent, 
        children: [
          {path: 'result', component: AadhardetailsComponent}
      ]},
      {path:'takepic', component: TakePicComponent},
      {path: '', component: HomeComponent},
    ])
  ],
  providers: [
    EthcontractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
