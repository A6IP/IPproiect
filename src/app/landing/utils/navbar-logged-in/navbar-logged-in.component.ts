import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/services/authentication/authentication.service';



@Component({
  selector: 'app-navbar-logged-in',
  templateUrl: './navbar-logged-in.component.html',
  styleUrls: ['./navbar-logged-in.component.css']
})




export class NavbarLoggedInComponent implements OnInit {

  profileRoute: string;
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }

  checkRoute(): void {
    if(this.auth.isAuthenticated()) {
      this.router.navigate(['/account'])
    } else {
      this.router.navigate(['/dialog'])
    }
  }

  logout(): void {
    this.auth.logout()
  }

}

