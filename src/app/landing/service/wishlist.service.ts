import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
url = 'https://back-end-hpp.herokuapp.com/api/v1/users/';
  constructor(private http: HttpClient) { }

  getWishlist() {

    return this.http.get(this.url + 'getfavorite/' + localStorage.getItem('userID')).pipe(
      map((result: any[]) => {
        const productIds = [];

        result.forEach(item => productIds.push(item.houseID));

        return productIds;
      })
    );
  }

  addToWishlist(houseID) {
    console.log(this.url, 'add to wishlist');
    const bearer = localStorage.getItem('token');
    const token = `Bearer ${bearer}`;
    console.log(token);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: token });
    return this.http.put(this.url + 'addtofavorite/' + localStorage.getItem('userID') + '/' + houseID, null,{headers:httpHeaders});
  }

  removeFromWishlist(houseID) {
    console.log(this.url, 'add to wishlist');
    const bearer = localStorage.getItem('token');
    const token = `Bearer ${bearer}`;
    console.log(token);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: token });
    console.log(this.url, 'remove from wishlist');
    return this.http.delete(this.url + 'removefromfavorite/' + localStorage.getItem('userID') + '/' + houseID,{headers:httpHeaders});
  }
}
