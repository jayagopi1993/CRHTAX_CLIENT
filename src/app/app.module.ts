import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { AddMemberComponent } from './components/add-member/add-member.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileMenuComponent,
    ProfileDetailsComponent,
    AddMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
