import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {House} from '../models/house';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://back-end-hpp.herokuapp.com/api/v1/allhouses';

  constructor(private http: HttpClient) {
  }

  getPosts(typeAll, page, number, type, string, housing, noOfRooms, floor, surface, noOfBathrooms, minPrice, maxPrice): Observable<House[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('number', number);


    if (typeAll === 1)
    {
      this.url = 'https://back-end-hpp.herokuapp.com/api/v1/search';
      console.log(housing, 'housinggg');
      if (housing != undefined && housing !== '') {
        console.warn('doferot de type');
        params = params.set('houseType', housing);
      }

      if (string != undefined &&  string !== '') {
        params =  params.set('text', string);
      }

      if (type != undefined &&  type !== '') {
        params.set('sellType', type);
      }
      if (noOfRooms != undefined &&  noOfRooms !== '') {
        params =  params.set('noOfRooms', noOfRooms);
      }
      if (floor != undefined &&  floor !== '') {
        params =  params.set('floor', floor);
      }
      if (surface != undefined && surface !== '') {
        params =  params.set('surface', surface);
      }
      if (noOfBathrooms != undefined &&  noOfBathrooms !== '') {
        params =  params.set('noOfBathrooms', noOfBathrooms);
      }
      if (minPrice != undefined &&  minPrice !== '') {
        params =   params.set('minPrice', minPrice);
      }
      if (maxPrice != undefined &&  maxPrice !== '') {
        params =  params.set('maxPrice', maxPrice);
      }

    }


    console.log(this.url);
    console.log(params.toString(), 'PARAMAS');
    return this.http.get<House[]>(this.url, {params});
  }
}
