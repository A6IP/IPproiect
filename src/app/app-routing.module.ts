import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogModule } from 'src/app/auth/auth.dialog.module'
import { HouseDetailsComponent } from './landing/components/house-details/house-details.component';
import {LandingPageComponent} from './landing/components/landing-page/landing-page.component';
import { ListComponent } from './landing/components/list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHouseComponent } from './dashboard/add-house/add-house.component';
import { SellerDashboardComponent } from './dashboard/seller-dashboard/seller-dashboard.component';
import { EditHouseComponent } from './dashboard/seller-dashboard/edit-house/edit-house.component';


const routes: Routes = [

  { path: 'home', component: DashboardComponent},

  { path: '', component: LandingPageComponent},

  { path: 'house-details/:id', component: HouseDetailsComponent},
  { path: 'listing', component: ListComponent},
  {  path: 'dashboard', component : DashboardComponent },
  {  path: 'addHouse', component : AddHouseComponent },
  {  path: 'editHouse', component : EditHouseComponent },
  {  path: 'sellerDash', component : SellerDashboardComponent },
  // { path: '', redirectTo: '', pathMatch: 'full'}
  {
      path: 'dialog',
      loadChildren: () => 
          import('./auth/auth.dialog.module').then(
              m => m.DialogModule
          )
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
