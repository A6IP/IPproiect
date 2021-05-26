import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-forgot-passwd',
  templateUrl: './forgot-passwd.component.html',
  styleUrls: ['./forgot-passwd.component.css']
})
export class ForgotPasswdComponent implements OnInit {

  forgotForm: FormGroup;
  email: String;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group(
      {
        email: ['',[Validators.required, Validators.email]]
      }
    )
  }

  goToLogin(): void {
    this.router.navigate(['dialog/login'])
  }

  onSubmit(): void {
    this.email = this.forgotForm.get('email').value;
    this.auth.reset(this.email).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
