import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-panel',
  templateUrl: './seller-panel.component.html',
  styleUrls: ['./seller-panel.component.css']
})
export class SellerPanelComponent implements OnInit{
  private housesList = [{}, {}, {}];
  @Input() SELLER_ID;
  private URL = 'https://back-end-hpp.herokuapp.com/api/v1/all/';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXdITHFUbHoybnZIMzdKZzFSd1lJNEJab2xBdVZVYXNBT1Jab2ZiSVBVPSIsImlhdCI6MTYyMTUyMjY3NCwiZXhwIjoxNjIxNjA5MDc0fQ.HRNi_VHJwY4x5pQfmMK-HMtH_n9padpSj1kC5qgmeNKoOEoWke1YfxD_E3iAFe-We90Bc-2LP0jEQwLJVSSPVw';
    const headers = {'Authorization': token };
    this.http.get(this.URL + this.SELLER_ID, {headers}).toPromise().then((data) => {
      this.housesList = JSON.parse(JSON.stringify(data));
    });
  }

  getHousesList = () => this.housesList;
}
