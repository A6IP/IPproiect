import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { HouseService } from '../house.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  constructor(
    // private route: ActivatedRoute,
    // private heroService: HouseService,
    // private location: Location
  ) {}

  ngOnInit(): void {
    // this.getHouse();
  }
  
  // getHouse(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.HouseService.getHouse(id)
  //     .subscribe(house => this.house = house);
  // }
}
