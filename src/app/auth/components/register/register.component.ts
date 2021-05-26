import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPayload } from 'src/app/auth/models/auth.model';
import { AuthenticationService } from 'src/app/auth/services/authentication/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public hide = true;
  public hideConfirm = true;
  submitted = false;
  payload: RegisterPayload = {
    username: '',
    password: '',
    name: '',
    phone: '',
    email: '',
    role: []
  }
  registerForm: FormGroup;
  confirmPasswd: string;

  constructor(private fb: FormBuilder, private auth: AuthenticationService,
    private router: Router

    ) { }
  
  ngOnInit(): void {
  
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      userType: ['',[]],
      fullName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      passwd: ['', [Validators.required, Validators.minLength(8)]],
      confirmPasswd: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  goToLogin(): void {
    this.router.navigate(['dialog/login'])
  }
 
  onSubmit() {
    this.submitted=true;
    if (this.registerForm.get('passwd').value !== this.registerForm.get("confirmPasswd").value) {
        alert("Passwords must match!")
    } else {
        this.payload.password = this.registerForm.get('passwd').value
        this.payload.name = this.registerForm.get('fullName').value
        this.payload.email = this.registerForm.get('emailAddress').value
        this.payload.phone = this.registerForm.get('phoneNumber').value
        this.payload.username = this.registerForm.get('username').value
        this.payload.role.push('user')        
        
        this.auth.register(this.payload).subscribe(
          res => {
            if (res.message === 'User registered successfully!')
            this.router.navigate(['/dialog/success'])
          },
          err => {
            if (err.error.message === 'Error: Email is already in use!') {
              alert('Email already taken!')
            } else if (err.error.message === 'Error: Username is already taken!') {
              alert('Username already taken!')
            }
          }
        )

    }
  }

}
