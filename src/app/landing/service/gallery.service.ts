import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) { }
  getPosts(houseID)
  {
    const url = 'https://back-end-hpp.herokuapp.com/api/v1/housedetails';
    const params = new HttpParams()
      .set('houseID', houseID);
      // .set('number', number);
    return this.http.get(url, {params});
  }
}
