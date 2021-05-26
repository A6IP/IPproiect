import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {House} from '../../../models/house';
import {WishlistService} from '../../../service/wishlist.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.css']
})
export class HouseItemComponent implements OnInit {
  // @Input() selected: boolean | undefined;
  // @Output() selectedChange = new EventEmitter<boolean>();
  constructor(private wishlistService: WishlistService, public _sanitizer: DomSanitizer, private router: Router) { }
  @Input() item: House;

  @Input() addedToWishlist: boolean;
  // public toggleSelected() {
  //   this.selected = !this.selected;
  //   this.selectedChange.emit(this.selected); }
  defaultPhoto = '/assets/house.png';

  ngOnInit(): void {
  }
  onClick(id,userid){
    localStorage.setItem('sellerID', userid);
    localStorage.setItem('houseID', id);
    this.router.navigateByUrl('/house-details/' + id);
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.item.houseID).subscribe((result) => {
      console.log(result);
      this.addedToWishlist = true;
    });
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.item.houseID).subscribe((result) => {
      console.log(result);
      this.addedToWishlist = false;
    });
  }
}


