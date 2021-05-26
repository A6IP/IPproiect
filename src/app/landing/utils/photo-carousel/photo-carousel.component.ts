import {Component, OnInit, ViewChild, ChangeDetectorRef, Input} from '@angular/core';
import { PhotoCarouselService } from '../../service/photo-carousel.service';
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
import {DomSanitizer} from '@angular/platform-browser';

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
  @Input() carouselType;
  constructor(private postData: PhotoCarouselService, private cd: ChangeDetectorRef, private router: Router, private _sanitizer: DomSanitizer) {}

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


  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }



  ngOnInit() {
    this.postData.getPosts(this.carouselType).subscribe((result) => {
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
