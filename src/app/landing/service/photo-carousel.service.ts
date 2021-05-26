import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoCarouselService {

  // postsData={ houseID: "7509bdbf-249f-463c-95f7-f55a314cf500"};
  url: any;

  // url="https://picsum.photos/v2/list";
  // sendData = {
  //   "houseID": "7509bdbf-249f-463c-95f7-f55a314cf500"
  // };

  constructor(private http: HttpClient) { }
  getPosts(carouselType)
  {
console.log(carouselType);
if (carouselType === 1) {
      this.url = 'https://back-end-hpp.herokuapp.com/api/v1/all/' + localStorage.getItem('sellerID');
}
if (carouselType === 2) {
      this.url = 'https://back-end-hpp.herokuapp.com/api/v1/similar/' + localStorage.getItem('houseID');
}
if (carouselType === 3){
  this.url = 'https://back-end-hpp.herokuapp.com/api/v1/bestdeals';
}
if (carouselType == 4){
  this.url = 'https://back-end-hpp.herokuapp.com/api/v1/lastadded';
}

return this.http.get(this.url);
  }

}


