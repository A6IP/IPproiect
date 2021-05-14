import { Injectable } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  url="https://house-prediction-fii.herokuapp.com/api/v1/housedetails";

  constructor(private http:HttpClient ) { }
  
  getPosts()
  {
    // let url="https://house-prediction-fii.herokuapp.com/api/v1/housesPhotos/8929e157-598d-40b8-b238-804ed7d6c3a4";
    // let url="https://picsum.photos/v2/list";
    // return this.http.get(url);

    let params1= new HttpParams().set('houseID', '7509bdbf-249f-463c-95f7-f55a314cf500')
  return this.http.get(this.url, {params:params1});
  }
}


