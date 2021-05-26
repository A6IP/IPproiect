import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-bottom',
  templateUrl: './landing-bottom.component.html',
  styleUrls: ['./landing-bottom.component.css']
})
export class LandingBottomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClick(){
    localStorage.removeItem('search');
    this.router.navigateByUrl('/listing');
  }
}
