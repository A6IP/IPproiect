import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import { PostsService } from '../../service/posts.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {House} from '../../models/house';
import {WishlistService} from '../../service/wishlist.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // productList: House[] = [
  //   new House('1', '1', '1', '1', 1, '1', '1', 1, '1', '1'),
  //   new House('2', '2', '2', '3', 3, '4', '5', 5, '5', '5'),
  //   new House('1', '1', '1', '1', 1, '1', '1', 1, '1', '1'),
  //   new House('1', '1', '1', '1', 1, '1', '1', 1, '1', '1')
  // ];
  productList: House[] = [];
  wishlist: number[] = [];

  data: any;
  totalRecords: any;
  page = 1;
  typeAll = 0;

  type = undefined;
  string = undefined;
  housing = undefined;
  noOfRooms = undefined;
  floor = undefined;
  surface = undefined;
  noOfBathrooms = undefined;
  minPrice = undefined;
  maxPrice = undefined;
value = undefined;

  constructor(private wishlistService: WishlistService, private productService: PostsService, private router: Router, private _sanitizer: DomSanitizer, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
     this.renderPage(null);
  }

  renderPage(form: NgForm) {
console.log(this.page, 'pageeee');
console.log(form, 'form');
console.log;
console.log(this.minPrice);
const myStorage = localStorage.getItem('search');
console.warn(myStorage);
let searchKey;




if (myStorage != null){
      searchKey = JSON.parse(myStorage);
      console.warn(searchKey);
      this.type = searchKey.type;
      console.warn(this.type);
      this.string = searchKey.string;
      console.warn(this.string);
      this.housing = searchKey.housing;
      console.warn(this.housing);
      this.typeAll = 1;
    }
console.log(form, 'formmmmmm');
if (form !== null){
      this.typeAll = 1;

      this.string = form.value.string;

      this.noOfRooms = form.value.noOfRooms;


      this.minPrice = form.value.minPrice;


      this.maxPrice = form.value.maxPrice;

      this.maxPrice = form.value.maxPrice;

      this.surface = form.value.surface;

      this.floor = form.value.floor;


      this.noOfBathrooms = form.value.noOfBathrooms;


    }
console.log(this.typeAll, 'typeall');
console.log(this.type);
console.log(this.string);
console.log(this.housing,"housinglist");
console.log(this.noOfRooms);
console.log(this.minPrice);
console.log(this.maxPrice);
console.log(this.surface);
console.log(this.floor);
console.log(this.noOfBathrooms);
this.productService.getPosts(this.typeAll, this.page, 8, this.type, this.string, this.housing, this.noOfRooms, this.floor, this.surface, this.noOfBathrooms, this.minPrice, this.maxPrice).subscribe((result) => {console.warn('AICI CALL', result);
                                                                                                                                                                                                                  this.data = result;

                                                                                                                                                                                                                  this.productList = result['second'];
                                                                                                                                                                                                                  console.log(this.productList, 'productList');
                                                                                                                                                                                                                  this.totalRecords = result['first'];
                                                                                                                                                                                                                  console.log(this.totalRecords); });
this.wishlistService.getWishlist().subscribe(result => {
      this.wishlist = result;
      console.log(result, 'wishlist');
    });

  }


  paginationChange(newPage: number) {
    this.page = newPage;
    console.log(this.page);
    this.renderPage(null);
  }
}



