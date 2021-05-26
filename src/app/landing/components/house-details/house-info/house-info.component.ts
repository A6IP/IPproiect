import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { AuthenticationService } from 'src/app/auth/services/authentication/authentication.service';
@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent implements OnInit {
  private routeSub: Subscription;
  houseID: any;
  result: any;
  constructor( private route: ActivatedRoute, private http: HttpClient, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.houseID = params.id;
      console.log(this.houseID, 'house id');
    });
    const url = 'https://back-end-hpp.herokuapp.com/api/v1/housedetails';
    let params = new HttpParams()
      .set('houseID', this.houseID);
    // if (this.authService.isAuthenticated()){
    //
    //   params = params.set('userID', localStorage.getItem('userID'));
    //   console.log(params)
    //   const bearer = localStorage.getItem('token');
    //   const token = `Bearer ${bearer}`;
    //   const httpHeaders = new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     Authorization: token });
    //   console.log(httpHeaders);
    //   this.http.get(url, {params, headers: httpHeaders})
    //     .subscribe((result: any) => {
    //       this.result = result;
    //       console.warn('result', this.result);
    //
    //     });
    //   console.log(this.result);
    // }
    // else
      {
      this.http.get(url, {params})
        .subscribe((result: any) => {
          this.result = result;
          console.warn('result', this.result);
          localStorage.setItem('sellerID', result.userID);
          localStorage.setItem('houseID', result.houseID);
        });
      console.log(this.result);
    }

  }

  // infoList:{price:string,mediumPrice:string,location:string,rooms:string,floor:string,surface:string,bathrooms:string,type:string,description:string}[]=info;
}
