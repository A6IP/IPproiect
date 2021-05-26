import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HouseType } from 'src/app/dashboard/add-house/add-form/house_type';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent{

  submitted = false;

  numberOfPhotos = 0;
  propertyPics: File[] = [];

  recommendedPrice: number;
  wrongAddress: boolean;

 


  ServerUrlAddHouse = 'https://back-end-hpp.herokuapp.com/api/v1/create';
  ServerUrlPhotos = 'https://back-end-hpp.herokuapp.com/api/v1/housesPhotos/create';
  houseID: string;
  userID: string;
  address: string;
  city: string;
  country: string;
  surface: number;
  floor: number;
  noOfBathrooms: number;
  noOfRooms: number;
  description: string;
  sellType: number;
  houseType: number;
  currentPrice: number;
  title: string;
  landSurface: number;
  constructionYear: number;

  constructor(private http: HttpClient) { }

  onTitleSet(title: any){ this.title = <string> title.control.value; }

  onLandSurfaceSet(landSurface : any){ this.landSurface = landSurface.control.value; }

  onConstructionYearSet (constructionYear : any){ this.constructionYear = constructionYear.control.value; }
  
  onAddressSet(location: any) { this.address = <string>location.control.value;}
  
  onUsableAreaSet(usableArea: any) { this.surface = usableArea.control.value;}

  onFloorSet(floor: any) { this.floor = floor.control.value; }

  onNBSet(numberOfBathrooms: any) { this.noOfBathrooms = numberOfBathrooms.control.value;}

  onNRSet(numberOfRooms: any) { this.noOfRooms = numberOfRooms.control.value; }

  onFileSelect(event: any) {
    if (this.numberOfPhotos < 5) {
      this.propertyPics[this.numberOfPhotos] = <File>event.target.files[0];
      this.numberOfPhotos++;
    }
  }

  onPriceSet(price: any) { this.currentPrice = price.control.value; }
  
  onDescriptionSet(description: any) { this.description = description.control.value; }

  onCountrySet(country:any){ this.country = country.control.value; }

  onCitySet(city :any){ this.city = city.control.value; }

  onSellTypeSet(event:any){ this.sellType = +event.target.value; }

  onHouseTypeSet(event:any){ this.houseType = +event.target.value;}



  onSubmit() {
    this.submitted = true;
    const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXdITHFUbHoybnZIMzdKZzFSd1lJNEJab2xBdVZVYXNBT1Jab2ZiSVBVPSIsImlhdCI6MTYyMTUyMjY3NCwiZXhwIjoxNjIxNjA5MDc0fQ.HRNi_VHJwY4x5pQfmMK-HMtH_n9padpSj1kC5qgmeNKoOEoWke1YfxD_E3iAFe-We90Bc-2LP0jEQwLJVSSPVw';
    const headers = {'Authorization': token };
    this.http.post<HouseType>(this.ServerUrlAddHouse, {
      userID: "7",
      description: this.description,
      title: this.title,
      city: this.city,
      country: this.country,
      address: this.address,
      constructionYear: this.constructionYear,
      noOfRooms: this.noOfRooms,
      floor: this.floor,
      surface: this.surface,
      landSurface: this.landSurface,
      noOfBathrooms: this.noOfBathrooms,
      houseType: this.houseType,
      sellType: this.sellType,
      currentPrice: this.currentPrice
      }, {headers}).subscribe(
         res=>{ this.recommendedPrice = res.recommendedPrice;
                     this.houseID = res.houseID
                     for(let i=0; i< this.numberOfPhotos; i++)
                     {
                     let fd = new FormData();
                     fd.append('file', this.propertyPics[0]);
                     fd.append('houseID', this.houseID);
                     this.http.post<any>(this.ServerUrlPhotos, fd, {headers}).subscribe({
                       next: (result:any) =>{ console.log(result);},
                       error:(err:any) => {console.log(err);}});
                    }
              },
              (error)=>{
                console.log(error);
                this.wrongAddress = true;
              }
            );
  }

}
