import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HouseDetailsComponent } from './house-details/house-details.component';


const routes: Routes = [
  {  path: 'house-details/:id', component:HouseDetailsComponent }
=======


// const routes: Routes = [
//   // { path: 'listing', component: listing-page }
// >>>>>>> landing-integration
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
