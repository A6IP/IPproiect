import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryPartComponent } from './gallery-part/gallery-part.component';
import {UserContactComponent} from './user-contact/user-contact.component';
import {HouseInfoComponent} from './house-info/house-info.component';
import {MapComponent} from './map/map.component';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NavbarLoggedInComponent} from './navbar-logged-in/navbar-logged-in.component';

import { AgmCoreModule } from '@agm/core';
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery'; 
import { HammerModule } from '@angular/platform-browser'; 
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {SwiperModule} from 'swiper/angular';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    GalleryPartComponent,
    UserContactComponent,
    HouseInfoComponent,
    MapComponent,
    PhotoCarouselComponent,
    NavbarComponent,
    NavbarLoggedInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    NgxGalleryModule , 
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBhqL0VAJqQpXMATFPcLdsq9RYV0kBjTQ',
     
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
