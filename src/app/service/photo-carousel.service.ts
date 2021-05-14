import { Injectable } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoCarouselService {

  // postsData={ houseID: "7509bdbf-249f-463c-95f7-f55a314cf500"};
   url="https://house-prediction-fii.herokuapp.com/api/v1/allhouses";

  //url="https://picsum.photos/v2/list";
  // sendData = {
  //   "houseID": "7509bdbf-249f-463c-95f7-f55a314cf500"
  // };

  constructor(private http:HttpClient) { }
  getPosts()
  {
    let params1= new HttpParams().set("page", '1').set("number", '9');
    return this.http.get(this.url, {params:params1});
  }

}

//service for getting the details of a house