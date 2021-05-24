import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user-type';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  private getUserInfo = 'https://house-prediction-fii.herokuapp.com/api/v1/users/';
  private updateUserInfoUrl = 'https://house-prediction-fii.herokuapp.com/api/v1/users/update';
  changeUserDetails : boolean = false;
  userToken : string = '6757fff1-e437-4d23-bd45-646a4b419b16';
  user : IUser = {
    userId: 0,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber:""
  };

  constructor(private http: HttpClient){
    this.http.get<IUser>(this.getUserInfo.concat(this.userToken)).subscribe(data => {this.user = data;
    if(this.user.email == null) this.user.email = "no email address";
    if(this.user.phoneNumber == null) this.user.phoneNumber = "no phone number";
  }); }

  updateUserInfo():void{
    let editSection = (<HTMLInputElement>document.querySelector('.edit__info__form'));
    let userInfoSection = (<HTMLInputElement>document.querySelector('.acc__info'));
    editSection.classList.remove('hide');
    userInfoSection.classList.add('hide'); 
    this.changeUserDetails=true;
    }

    saveChanges(){
      this.changeUserDetails = false;
      let editSection = (<HTMLInputElement>document.querySelector('.edit__info__form'));
      let userInfoSection = (<HTMLInputElement>document.querySelector('.acc__info'));
      editSection.classList.add('hide');
      userInfoSection.classList.remove('hide');

      this.http.post<IUser>(this.updateUserInfoUrl,this.user).subscribe(data => {this.user = data;
      if(this.user.email == null) this.user.email = "no email address";
      if(this.user.phoneNumber == null) this.user.phoneNumber = "no phone number";
    });
    
    }
}