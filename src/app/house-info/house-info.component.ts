import { Component, OnInit } from '@angular/core';
import { PhotoCarouselService } from '../service/photo-carousel.service';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


import info from './_files/info.json';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent implements OnInit {

  paramQuery = '';

  constructor(private postData: PhotoCarouselService, private activatedRoute: ActivatedRoute) {
    this. activatedRoute.params.subscribe(data =>{
      this.paramQuery = data.houseID;
      
    }
      )
   }


  data: any;
  dataToDisplay: any;
  ngOnInit(): void {
    this.postData.getPosts().subscribe((test) => {
      console.warn('test', test);
      this.data = test;

      console.warn('the data with specified id', this.data);
  });
      
  }
  infoList:{price:string,mediumPrice:string,location:string,rooms:string,floor:string,surface:string,bathrooms:string,type:string,description:string}[]=info;
}
