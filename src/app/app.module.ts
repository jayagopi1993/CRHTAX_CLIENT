import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule , ReactiveFormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaxwallComponent } from './components/taxwall/taxwall.component';
import {RoutingModule} from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    ProfileMenuComponent,
    ProfileDetailsComponent,
    AddMemberComponent,
    DashboardComponent,
    TaxwallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
