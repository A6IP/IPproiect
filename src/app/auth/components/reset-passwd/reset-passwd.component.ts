import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-reset-passwd',
  templateUrl: './reset-passwd.component.html',
  styleUrls: ['./reset-passwd.component.css']
})
export class ResetPasswdComponent implements OnInit {

  submitted = false;
  public hide = true;
  public hideConfirm = true;
  resetForm: FormGroup;
  newPasswd: string;
  confirmPasswd: string;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      newPasswd: ['', [Validators.required, Validators.minLength(8)]],
      confirmPasswd: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  goToLogin(): void {
    this.router.navigate(['/login'])
  }

  onSubmit() {
    this.submitted=true;
    if (this.resetForm.get('newPasswd').value !== this.resetForm.get('confirmPasswd').value) {
      alert('Passwords must match!')
    } else {
      this.newPasswd = this.resetForm.get('newPasswd').value
      this.confirmPasswd = this.resetForm.get('confirmPasswd').value
    }
  }
}
