import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import {GalleryService} from 'src/app/landing/service/gallery.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-base64gallery',
  templateUrl: './base64gallery.component.html',
  styleUrls: ['./base64gallery.component.css']
})
export class Base64galleryComponent implements OnInit {

  constructor(private postData: GalleryService, private route: ActivatedRoute, private _sanitizer: DomSanitizer) { }
  houseID: any;
  data: any;
  private routeSub: Subscription;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {




    this.galleryOptions = [
      {
        width: '100%',
        height: '30vw',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 1110,
        width: '100%',
        height: '60vw',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '80vw',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 5,
        thumbnailMargin: 5
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.routeSub = this.route.params.subscribe(params => {
      this.houseID = params.id;
      console.log(this.houseID, 'house id');
    });
    this.galleryImages = [];

    this.postData.getPosts(this.houseID).subscribe((result) => {
      // console.warn("result", result);
      this.data = result;
      console.log(this.data, 'galerie');
      const photos = this.data.photos;
      for (let i = 0; i < 5; i++){
        let imagePath=null
        if(photos[i]!==undefined)
         imagePath = 'data:image/jpg;base64,' + photos[i];
        else  imagePath="/assets/house.png";
        console.log(imagePath, 'image');
        // const image=imagePath.get("changingThisBreaksApplicationSecurity")
        const img = 'data:image/jpg;base64,' + imagePath;
        console.log('suntem aici');
        this.galleryImages.push({ small : imagePath, medium : imagePath, big : imagePath});
        console.log(this.galleryImages, 'asets');
      }
    });
    // this.galleryImages = [
    //   {
    //     small: '/assets/house.png',
    //     medium: '/assets/house.png',
    //     big: '/assets/house.png'
    //   },
    //   {
    //     small: 'assets/2-small.jpg',
    //     medium: 'assets/2-medium.jpg',
    //     big: 'assets/2-big.jpg'
    //   },
    //   {
    //     small: 'assets/3-small.jpg',
    //     medium: 'assets/3-medium.jpg',
    //     big: 'assets/3-big.jpg'
    //   }
    // ];
  }
}
