import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ISellerStatistics} from './sellerStatistics';

@Component({
  selector: 'app-seller-statistics',
  templateUrl: './seller-statistics.component.html',
  styleUrls: ['./seller-statistics.component.css']
})
export class SellerStatisticsComponent {
  private URL = '/assets/data/sellerStatistics.json';
  rawData: any[];
  data: any[] = [{
    name: 'Average Houses Followers',
    series: []
  }];


  constructor(private http: HttpClient) {
    this.http.get<ISellerStatistics[]>(this.URL).subscribe(data => this.rawData = data);
  }

  getData(): any[] {
    let followersData: any[];
    followersData = [];
    if (this.rawData !== undefined) {
      this.rawData.sort((first, second) => (first.time - second.time)).forEach(follower => {
        followersData.push({value: follower.followers, name: this.unixToDate(follower.time)});
      });
      this.data[0].series = followersData;
    }
    return this.data;
  }

  unixToDate(unixtime: number): string {
    const date = new Date(unixtime * 1000);
    const day = ('0' + date.getDay()).substr(-2);
    const month = ('0' + date.getMonth()).substr(-2);
    const year = date.getFullYear();

    return day + '.' + month + '.' + year;
  }
}
