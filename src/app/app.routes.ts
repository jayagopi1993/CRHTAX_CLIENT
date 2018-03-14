import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaxwallComponent } from './components/taxwall/taxwall.component';

export const routes:Routes=[
    {path:"familyprofile",component:ProfileDetailsComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"taxwall",component:TaxwallComponent},
    {path:"",component:DashboardComponent},
]

@NgModule({
    imports: [
    RouterModule.forRoot(routes)
   ],
     exports:[
         RouterModule
     ]
 })
 export class RoutingModule{
 
 }
 