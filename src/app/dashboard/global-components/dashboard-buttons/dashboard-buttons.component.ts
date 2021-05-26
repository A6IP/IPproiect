import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-buttons',
  templateUrl: './dashboard-buttons.component.html',
  styleUrls: ['./dashboard-buttons.component.css']
})
export class DashboardButtonsComponent implements OnInit {
  @Input() selectedButton;
  isSellerBtnClicked = false;
  isUserBtnClicked = false;
  isAddPropertyBtnClicked = false;

  constructor() {
  }

  ngOnInit(): void {
    if (this.selectedButton === 'user') {
      this.highlightUser();
    } else if (this.selectedButton === 'seller') {
      this.highlightSeller();
    } else if (this.selectedButton === 'add') {
      this.highlightAddProperty();
    }
    console.log(<HTMLInputElement>document.getElementById("user--btn"));
    console.log(<HTMLInputElement>document.getElementById("seller--btn"));
    console.log(<HTMLInputElement>document.getElementById("add__property--btn"));
  }

  highlightUser(): void {
    // let sellerBtn = (<HTMLInputElement>document.getElementById("seller--btn"));
    // let userBtn = (<HTMLInputElement>document.getElementById("user--btn"));
    // let addPropertyBtn = (<HTMLInputElement>document.getElementById("add__property--btn"));
    //
    // sellerBtn.classList.add('active__state');
    // if(userBtn.classList.contains('active__state') || addPropertyBtn.classList.contains('active__state')){
    //   userBtn.classList.remove('active__state');
    //   addPropertyBtn.classList.remove('active__state');
    // }

    this.isUserBtnClicked = true;
    this.isSellerBtnClicked = false;
    this.isAddPropertyBtnClicked = false;
  }

  highlightSeller(): void {
    // let sellerBtn = (<HTMLInputElement>document.getElementById("seller--btn"));
    // let userBtn = (<HTMLInputElement>document.getElementById("user--btn"));
    // let addPropertyBtn = (<HTMLInputElement>document.getElementById("add__property--btn"));
    //
    // userBtn.classList.add('active__state');
    // if(sellerBtn.classList.contains('active__state') || addPropertyBtn.classList.contains('active__state')){
    //   sellerBtn.classList.remove('active__state');
    //   addPropertyBtn.classList.remove('active__state');
    // }

    this.isUserBtnClicked = false;
    this.isSellerBtnClicked = true;
    this.isAddPropertyBtnClicked = false;
  }

  highlightAddProperty():void{
    // let addPropertyBtn = (<HTMLInputElement>document.getElementById("add__property--btn"));
    // let sellerBtn = (<HTMLInputElement>document.getElementById("seller--btn"));
    // let userBtn = (<HTMLInputElement>document.getElementById("user--btn"));
    //
    // addPropertyBtn.classList.add('active__state');
    // if(sellerBtn.classList.contains('active__state') || userBtn.classList.contains('active__state')){
    //   sellerBtn.classList.remove('active__state');
    //   userBtn.classList.remove('active__state');
    // }

    this.isUserBtnClicked = false;
    this.isSellerBtnClicked = false;
    this.isAddPropertyBtnClicked = true;
  }
}
