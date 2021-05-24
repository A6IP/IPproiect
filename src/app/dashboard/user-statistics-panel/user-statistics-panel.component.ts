import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserStatistics } from './userStatistics';

@Component({
  selector: 'app-user-statistics-panel',
  templateUrl: './user-statistics-panel.component.html',
  styleUrls: ['./user-statistics-panel.component.css']
})
export class UserStatisticsPanelComponent {

  private URL = 'https://house-prediction-fii.herokuapp.com/api/v1/users/getfavorite/6757fff1-e437-4d23-bd45-646a4b419b16';
  private rawData: any[];
  data: any[] = [{
    name: 'Average Price',
    series: []
  }];

  constructor(private http: HttpClient) {
    this.http.get<IUserStatistics[]>(this.URL).subscribe(data => this.rawData = data);
  }

  // debug(): void {
  //   console.log(this.rawData[0].)
  // }

  getData(): any[] {
    let followersData: any[];
    followersData = [];
    this.rawData.sort((first, second) => (first.time - second.time)).forEach(follower => {
      followersData.push({value: follower.price, name: this.unixToDate(follower.time)});
    });
    this.data[0].series = followersData;
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