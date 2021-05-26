import { DashboardComponent } from './dashboard.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerPanelComponent } from './seller-dashboard/seller-panel/seller-panel.component';
import { SellerStatisticsComponent } from './seller-dashboard/seller-statistics/seller-statistics.component';
import { EditHouseComponent } from './seller-dashboard/edit-house/edit-house.component';
import { EditFormComponent } from './seller-dashboard/edit-house/edit-form/edit-form.component';
import { DashboardButtonsComponent } from './global-components/dashboard-buttons/dashboard-buttons.component';
import { UserInfoComponent } from './global-components/user-info/user-info.component';
import { HeaderComponent } from './global-components/header/header.component';
import { UserStatisticsPanelComponent } from './user-statistics-panel/user-statistics-panel.component';
import { UserFavoriteHistoryComponent } from './user-favorite-history/user-favorite-history.component';
import { StatisticsPanelComponent } from './user-statistics-panel/statistics-panel/statistics-panel.component';
import { FavoritePanelComponent } from './user-favorite-history/favorite-panel/favorite-panel.component';
import { HistoryPanelComponent } from './user-favorite-history/history-panel/history-panel.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { AddFormComponent } from './add-house/add-form/add-form.component';
import { SellerHousePanelComponent } from './seller-dashboard/seller-panel/seller-house-panel/seller-house-panel.component';
import { SellerStatisticsPanelComponent } from './seller-dashboard/seller-statistics/seller-statistics-panel/seller-statistics-panel.component';
import { DashFooterComponent } from './global-components/dash-footer/dash-footer.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {AppRoutingModule} from '../app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule} from '@angular/cdk/portal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
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
      DashFooterComponent
  
    ],
    imports: [
      NgxChartsModule,
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      PortalModule,
      HttpClientModule,
      FormsModule
    ]
})
export class DashboardModule{ }
  