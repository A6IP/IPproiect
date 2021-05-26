import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: any;
  lng: any;
  zoom = 16;
  circles: circle[] = [
  ];
  private routeSub: Subscription;
  houseID: any;
  result: any;

  constructor(
    private _mapsAPILoader: MapsAPILoader, private route: ActivatedRoute, private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.houseID = params.id;
      console.log(this.houseID, 'house id');
    });
    const url = 'https://back-end-hpp.herokuapp.com/api/v1/housedetails';
    const params = new HttpParams()
      .set('houseID', this.houseID);

    this.http.get(url, {params})
      .subscribe((result: any) => {
        this.lat = result.latitude;
        this.lng = result.longitude;
        this.circles.push({lat: this.lat, lng: this.lng});
        console.warn('result', this.result);
      });
    console.log('aici');
    console.log(this.result);
    this.lat = this.result.latitude;
    console.log(this.lat, 'latitudine');
    this.lng = this.result.longitude;
    console.log(this.lng, 'longitudine');

  }

}
interface circle {
  lat: number;
  lng: number; }
