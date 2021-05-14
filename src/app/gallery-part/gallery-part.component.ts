import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../galleryService/gallery.service';

@Component({
  selector: 'app-gallery-part',
  templateUrl: './gallery-part.component.html',
  styleUrls: ['./gallery-part.component.css']
})

export class GalleryPartComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  data:any;
  paramQuery = '';
  dataToDisplay: any;
  constructor(private postData:GalleryService, private activatedRoute: ActivatedRoute) {
    this. activatedRoute.params.subscribe(data =>{
      this.paramQuery = data.houseID;
    }
      )
   }



  ngOnInit(): void {


    this.galleryImages = [];


    this.postData.getPosts().subscribe((result)=>{
      //console.warn("result", result);
      this.data=result;
      // for(let i=0; i < this.data.length; i++)
      // {
      //   if(this.data[i].houseID == this.paramQuery)
      //     {this.dataToDisplay=this.data[i];
      //       break;
      //     }
      // }
      for(let i=0; i<5; i++){
        console.warn("result", result[i]);
         //this.galleryImages.push({ "small" : result["data:image/png;base64, photos[i]"], "medium" : this.data.photos[i]["data:image/png;base64, data"], "big" : this.data.photos[i]["data:image/png;base64, data"]})
       // this.galleryImages.push({ "small" : this.dataToDisplay["download_url"], "medium" : this.dataToDisplay["download_url"], "big" : this.dataToDisplay["download_url"]})

      }
  })


    this.galleryOptions = [
    {
      width: '45vw',
      height: '40vw',
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
  
  }
}
