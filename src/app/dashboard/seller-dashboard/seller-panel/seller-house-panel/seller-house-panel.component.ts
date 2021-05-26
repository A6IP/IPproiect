import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-seller-house-panel',
  templateUrl: './seller-house-panel.component.html',
  styleUrls: ['./seller-house-panel.component.css']
})
export class SellerHousePanelComponent implements OnInit {
  private URL = 'https://back-end-hpp.herokuapp.com/api/v1/delete/';

  @Input() house: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.house = JSON.parse(JSON.stringify(this.house));
  }

  getPrice(): string {
    return this.convertPrice(this.house.currentPrice);
  }

  convertPrice(price: number): string {
    const UNIT_SYMBOL = '$';
    let resultPrice = '';
    let counter = 0;

    if (price === undefined) {
      return '0';
    }

    for (let i = 0; i < price.toString().length; i++) {
      counter++;
      resultPrice += price.toString()[i];
      if (counter === 3 && i != price.toString().length - 1) {
        counter = 0;
        resultPrice += '.';
      }
    }
    resultPrice += UNIT_SYMBOL;

    return resultPrice;
  }

  deleteHouse = () => {
    const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXdITHFUbHoybnZIMzdKZzFSd1lJNEJab2xBdVZVYXNBT1Jab2ZiSVBVPSIsImlhdCI6MTYyMTUyMjY3NCwiZXhwIjoxNjIxNjA5MDc0fQ.HRNi_VHJwY4x5pQfmMK-HMtH_n9padpSj1kC5qgmeNKoOEoWke1YfxD_E3iAFe-We90Bc-2LP0jEQwLJVSSPVw';
    const headers = {'Authorization': token };
    this.http.delete(this.URL + this.house.id, { headers });
  }

  getImage = () => 'data:image/png;base64,' + this.house.photos[0];

  hasImages = () =>this.house.photos === null;

  getTitle = () => this.house.title;

  getFavoritesNumber = () => this.house.noOfFave;

  getDescription = () => this.house.description;

  saveHouse = () => localStorage.setItem('houseID', this.house.houseID);
}
