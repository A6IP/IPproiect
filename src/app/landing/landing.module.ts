import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserContactComponent} from './components/house-details/user-contact/user-contact.component';
import {HouseInfoComponent} from './components/house-details/house-info/house-info.component';
import {MapComponent} from './components/house-details/map/map.component';
import { PhotoCarouselComponent } from './utils/photo-carousel/photo-carousel.component';

import { AgmCoreModule } from '@agm/core';
import { HammerModule } from '@angular/platform-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {SwiperModule} from 'swiper/angular';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { LandingSearchComponent } from './components/landing-page/landing-search/landing-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { HttpClientModule } from '@angular/common/http';
import { LandingBottomComponent } from './components/landing-page/landing-bottom/landing-bottom.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ListComponent } from './components/list/list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './utils/footer/footer.component';
import { Base64galleryComponent } from './components/house-details/base64gallery/base64gallery.component';
import { HouseItemComponent } from './components/list/house-item/house-item.component';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [
    UserContactComponent,
    HouseInfoComponent,
    MapComponent,
    PhotoCarouselComponent,

    HouseDetailsComponent,
    LandingSearchComponent,
    LandingBottomComponent,
    LandingPageComponent,
    ListComponent,
    FooterComponent,
    Base64galleryComponent,
    HouseItemComponent

  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HammerModule,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBhqL0VAJqQpXMATFPcLdsq9RYV0kBjTQ',

    }),

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    AppRoutingModule,
    NgxGalleryModule

  ],
})
export class LandingModule { }
