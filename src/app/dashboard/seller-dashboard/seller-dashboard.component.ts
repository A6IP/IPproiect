import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit{
  private URL = 'https://house-prediction-fii.herokuapp.com/api/auth/confirm';
  private sellerId: string;

  constructor(private http: HttpClient) {
  }
//in loc de url, vedem in localstorage
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.http.get(this.URL + token).toPromise().then((data) => {
      this.sellerId = JSON.parse(JSON.stringify(data)).id;
    });
  }

  getSellerId() {
    return this.sellerId;
  }
}
