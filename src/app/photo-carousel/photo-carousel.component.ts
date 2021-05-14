import { Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { PhotoCarouselService } from '../service/photo-carousel.service';
import {HttpClient} from '@angular/common/http';

// import SwiperCore from 'swiper/core';
import {SwiperModule} from 'swiper/angular';

import { Variable } from '@angular/compiler/src/render3/r3_ast';
// import Swiper, {SwiperOptions} from "swiper";
import {Swiper, SwiperOptions} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import {Router} from '@angular/router';

import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Virtual,
    Zoom,
    Autoplay,
    Thumbs,
    Controller
  } from 'swiper/core';

  // install Swiper components
SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Virtual,
    Zoom,
    Autoplay,
    Thumbs,
    Controller
  ]);

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.css']
})
export class PhotoCarouselComponent implements OnInit {
constructor(private postData: PhotoCarouselService, private cd: ChangeDetectorRef, private router: Router) {}

//   constructor(private photoCarousel:PhotoCarouselService) { }
data: any;

@ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  show: boolean;
  thumbs: any;
  // constructor(private cd: ChangeDetectorRef) {}


  thumbsSwiper: any;
  controlledSwiper: any;

  indexNumber = 1;
  exampleConfig = { slidesPerView: 3 };
  slidesPerView = 4;
  pagination: any = false;

  slides2 = ['slide 1', 'slide 2', 'slide 3'];

  navigation = false;

  scrollbar: any = false;
  breakpoints = {
    150: {slidesPerView: 2, spaceBetween: 10},
    400: { slidesPerView: 2, spaceBetween: 10},
    640: { slidesPerView: 2, spaceBetween: 10 },
    780: { slidesPerView: 3, spaceBetween: 40 },
    1024: { slidesPerView: 3, spaceBetween: 50 }
  };

  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
  virtualSlides = Array.from({ length: 600 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  breakPointsToggle: boolean;


//   name = 'Angular';
//   imageObject = [{
//       image: 'this.data.url',
//       thumbImage: './assets/house.png',
//       alt: 'alt of image',
//       title: '70.000$ 5 camere Valea Lupului, Iasi'
//   }, {
//       image: './assets/house3.png',
//       thumbImage: './assets/house3.png',
//       title: '70.000$ 5 camere Valea Lupului, Iasi'
//   }, {
//       image: './assets/house2.png',
//       thumbImage: './assets/house2.png',
//       title: '70.000$ 5 camere Valea Lupului, Iasi'
//   }, {
//       image: './assets/house.png',
//       thumbImage: './assets/house.png',
//       title: '70.000$ 5 camere Valea Lupului, Iasi'
//   }, {
//       image: './assets/house2.png',
//       thumbImage: './assets/house2.png',
//       title: '70.000$ 5 camere Valea Lupului, Iasi'
//   }, {
//       image: './assets/house3.png',
//       thumbImage: './assets/house3.png',
//       title: '70.000$ 5 camere Valea Lupului, Iasi'
//   },
//   {image: './assets/house.png',
//   thumbImage: './assets/house.png',
//   alt: 'alt of image',
//   title: '70.000$ 5 camere Valea Lupului, Iasi'
// }, {
//   image: 'this.data.url',
//   thumbImage: './assets/house3.png',
//   title: '70.000$ 5 camere Valea Lupului, Iasi'
// }, {
//   image: './assets/house2.png',
//   thumbImage: './assets/house2.png',
//   title: '70.000$ 5 camere Valea Lupului, Iasi'
// }];
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }



ngOnInit() {
  this.postData.getPosts().subscribe((result) => {
    console.warn('result', result);
    this.data = result;

});

} 

onSelect(item){
  this.router.navigate(['/house-details', item.houseID]);
}


  setThumbsSwiper(swiper) {
    this.thumbsSwiper = swiper;
  }
  setControlledSwiper(swiper) {
    this.controlledSwiper = swiper;
  }
  replaceSlides() {
    this.slides2 = ['foo', 'bar'];
  }

  togglePagination() {
    if (!this.pagination) {
      this.pagination = { type: 'fraction' };
    } else {
      this.pagination = false;
    }
  }
  toggleNavigation() {
    this.navigation = !this.navigation;
  }
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }

  log(string) {
    // console.log(string);
  }
  breakpointChange() {
    this.breakPointsToggle = !this.breakPointsToggle;
    this.breakpoints = {
      150: {slidesPerView: 2, spaceBetween: 10},
      400: { slidesPerView: 2, spaceBetween: 20},
      640: { slidesPerView: 2, spaceBetween: 10 },
      780: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 }
    };
  }


}
