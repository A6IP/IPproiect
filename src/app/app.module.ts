import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import SearchIcon from '@material-ui/icons/Search';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {SwiperModule} from 'swiper/angular';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerDashboardComponent } from './dashboard/seller-dashboard/seller-dashboard.component';
import { SellerPanelComponent } from './dashboard/seller-dashboard/seller-panel/seller-panel.component';
import { SellerStatisticsComponent } from './dashboard/seller-dashboard/seller-statistics/seller-statistics.component';
import { EditHouseComponent } from './dashboard/seller-dashboard/edit-house/edit-house.component';
import { EditFormComponent } from './dashboard/seller-dashboard/edit-house/edit-form/edit-form.component';
import { DashboardButtonsComponent } from './dashboard/global-components/dashboard-buttons/dashboard-buttons.component';
import { UserInfoComponent } from './dashboard/global-components/user-info/user-info.component';
import { HeaderComponent } from './dashboard/global-components/header/header.component';
import { UserStatisticsPanelComponent } from './dashboard/user-statistics-panel/user-statistics-panel.component';
import { UserFavoriteHistoryComponent } from './dashboard/user-favorite-history/user-favorite-history.component';
import { StatisticsPanelComponent } from './dashboard/user-statistics-panel/statistics-panel/statistics-panel.component';
import { FavoritePanelComponent } from './dashboard/user-favorite-history/favorite-panel/favorite-panel.component';
import { HistoryPanelComponent } from './dashboard/user-favorite-history/history-panel/history-panel.component';
import { AddHouseComponent } from './dashboard/add-house/add-house.component';
import { AddFormComponent } from './dashboard/add-house/add-form/add-form.component';
import { SellerHousePanelComponent } from './dashboard/seller-dashboard/seller-panel/seller-house-panel/seller-house-panel.component';
import { SellerStatisticsPanelComponent } from './dashboard/seller-dashboard/seller-statistics/seller-statistics-panel/seller-statistics-panel.component';
import { DashFooterComponent } from './dashboard/global-components/dash-footer/dash-footer.component';
import {LandingModule} from './landing/landing.module';
import { DialogModule } from './auth/auth.dialog.module';
import { AuthMaterialModule } from './auth/auth.material.module';
import { DialogComponent } from './auth/components/test-dialog/test.dialog.component';
import {MatListModule} from '@angular/material/list';
import {NavbarLoggedInComponent} from './landing/utils/navbar-logged-in/navbar-logged-in.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SellerDashboardComponent,
    SellerPanelComponent,
    SellerStatisticsComponent,
    EditHouseComponent,
    EditFormComponent,
    DashboardButtonsComponent,
    UserInfoComponent,
    HeaderComponent,
    UserStatisticsPanelComponent,
    UserFavoriteHistoryComponent,
    StatisticsPanelComponent,
    FavoritePanelComponent,
    HistoryPanelComponent,
    AddHouseComponent,
    AddFormComponent,
    SellerHousePanelComponent,
    SellerStatisticsPanelComponent,
    DashFooterComponent,
    DialogComponent,
    NavbarLoggedInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    SwiperModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    LandingModule,
    AppRoutingModule,

    DashboardModule

    DialogModule,
    MatListModule,
    RouterModule

  ],

  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
   }
