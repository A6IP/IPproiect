import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HouseType } from 'src/app/dashboard/add-house/add-form/house_type'

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {

  ServerGet = "https://back-end-hpp.herokuapp.com/api/v1/housedetails?houseID=";
  ServerPost = "https://back-end-hpp.herokuapp.com/api/v1/update ";
  submitted = false;
  houseID: string = "7509bdbf-249f-463c-95f7-f55a314cf500";
  recommendedPrice: number;
  propertyPics: File[] = [];
  numberOfPhotos = 0;
  house: HouseType = { userID : "7",
    houseID: "",
    description: "",
    title:"",
    city : "",
    country : "",
    address : "",
    constructionYear: 0,
    noOfRooms : 0,
    floor : 0,
    surface : 0,
    landSurface: 0,
    noOfBathrooms : 0,
    houseType : 0,
    sellType : 0,
    currentPrice : 0,
    recommendedPrice : 0
  };

  constructor (private http: HttpClient) {
    const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXdITHFUbHoybnZIMzdKZzFSd1lJNEJab2xBdVZVYXNBT1Jab2ZiSVBVPSIsImlhdCI6MTYyMTUyMjY3NCwiZXhwIjoxNjIxNjA5MDc0fQ.HRNi_VHJwY4x5pQfmMK-HMtH_n9padpSj1kC5qgmeNKoOEoWke1YfxD_E3iAFe-We90Bc-2LP0jEQwLJVSSPVw';
    const headers = {'Authorization': token };
    this.http.get<HouseType>(this.ServerGet.concat(this.houseID), { headers }).subscribe({next: (data:HouseType) => {
        this.house = {
          houseID: data.houseID,
          userID: data.userID,
          description: data.description,
          title: data.title,
          city: data.city,
          country: data.country,
          address: data.address,
          constructionYear: data.constructionYear,
          noOfRooms: data.noOfRooms,
          floor: data.floor,
          surface: data.surface,
          landSurface: data.landSurface,
          noOfBathrooms: data.noOfBathrooms,
          houseType: data.houseType,
          sellType: data.sellType,
          currentPrice: data.currentPrice,
          recommendedPrice: data.recommendedPrice
        }
      },
      error:(err:any) => {console.log(err);},
      complete:()=> {console.log("complete");}});
  }

  onFileSelect(event: any) {
    if (this.numberOfPhotos < 5) {
      this.propertyPics[this.numberOfPhotos] = <File>event.target.files[0];
      this.numberOfPhotos++;
    }
  }

  onSubmit() {
    this.submitted = true;
    const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXdITHFUbHoybnZIMzdKZzFSd1lJNEJab2xBdVZVYXNBT1Jab2ZiSVBVPSIsImlhdCI6MTYyMTUyMjY3NCwiZXhwIjoxNjIxNjA5MDc0fQ.HRNi_VHJwY4x5pQfmMK-HMtH_n9padpSj1kC5qgmeNKoOEoWke1YfxD_E3iAFe-We90Bc-2LP0jEQwLJVSSPVw';
    const headers = {'Authorization': token };
    this.http.post<HouseType>(this.ServerPost, {
      houseID:this.houseID,
      description: this.house.description,
      title: this.house.title,
      city: this.house.city,
      country: this.house.country,
      address: this.house.address,
      constructionYear: this.house.constructionYear,
      noOfRooms: this.house.noOfRooms,
      floor: this.house.floor,
      surface: this.house.surface,
      landSurface: this.house.landSurface,
      noOfBathrooms: this.house.noOfBathrooms,
      houseType: this.house.houseType.toString(),
      sellType: this.house.sellType.toString(),
      currentPrice: this.house.currentPrice.toString()
    }, { headers }).subscribe({next:(result) =>{ console.log(result); this.recommendedPrice = result.recommendedPrice;},
      error:(err:any) => {console.log(err);}, complete:()=> {console.log("complete");}});
  }
}
