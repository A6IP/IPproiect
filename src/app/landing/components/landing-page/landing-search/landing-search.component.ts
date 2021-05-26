import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-landing-search',
  templateUrl: './landing-search.component.html',
  styleUrls: ['./landing-search.component.css']
})
export class LandingSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log('aici');
    // const user = document.getElementById('search-form');
    // console.log(user);
  }

 getValues(val){

    localStorage.setItem('search', JSON.stringify(val));
    console.warn(val);
    this.router.navigateByUrl('/listing');
}

}
