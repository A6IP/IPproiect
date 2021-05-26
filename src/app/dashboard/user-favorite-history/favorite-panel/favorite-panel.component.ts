import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IFavourite} from './favourite';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-favorite-panel',
  templateUrl: './favorite-panel.component.html',
  styleUrls: ['./favorite-panel.component.css']
})

export class FavoritePanelComponent {
  favData: any[] = [];
  favIndex = 1;
  userID = '6757fff1-e437-4d23-bd45-646a4b419b16';

  URL = 'https://back-end-hpp.herokuapp.com/api/v1/users/getfavorite/6757fff1-e437-4d23-bd45-646a4b419b16';
  deleteURL = "https://back-end-hpp.herokuapp.com/api/v1/users/removefromfavorite/";
  constructor(private http: HttpClient, public _sanitizer: DomSanitizer) {
    const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJibHorWXp0bzBoY3FVSUJWdjZqMkxnSWcwS3R2R25PUkt1Mm1hZWhZc0JJPSIsImlhdCI6MTYyMTY5NTgwMSwiZXhwIjoxNjIxNzgyMjAxfQ.X22ReBqnY3AyCEadNk-wNm106KTSS76Mqw4EPW-JRHBqY88YO8E75x7kGFlmXk3KC9kZcCQL7dEKFSwHKr16Xw';
    const headers = { 'Authorization': token };
    this.http.get<IFavourite[]>(this.URL, { headers }).subscribe(
      data => this.favData = data,
      () => {},
      );
    }
    
    remove(id: string, index: number): void {
      const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJibHorWXp0bzBoY3FVSUJWdjZqMkxnSWcwS3R2R25PUkt1Mm1hZWhZc0JJPSIsImlhdCI6MTYyMTY5NTgwMSwiZXhwIjoxNjIxNzgyMjAxfQ.X22ReBqnY3AyCEadNk-wNm106KTSS76Mqw4EPW-JRHBqY88YO8E75x7kGFlmXk3KC9kZcCQL7dEKFSwHKr16Xw';
      const headers = { 'Authorization': token };
      this.http.delete<any>(this.deleteURL + this.userID + '/' + id, { headers }).subscribe(
          { next:(result) =>{ console.log(result);},
            error:(err:any) => {console.log(err);}, 
            complete:()=> { console.log("complete");
                            this.favData.splice(index, 1);}
          }
        );
      }

  favPrev(): void {
    if (this.favIndex - 1 !== 0) {
      this.favIndex = this.favIndex - 1;
    }
  }

  favNext(): void {
    if (this.favIndex + 1 !== this.favData.length - 1) {
      this.favIndex = this.favIndex + 1;
    }
  }
}
