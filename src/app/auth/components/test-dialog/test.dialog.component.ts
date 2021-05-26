import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: 'test.dialog.component.html',
  styleUrls: ['./test.dialog.component.css'],
})

export class DialogComponent {
  constructor(public router: Router) {}

  openAuthDialog() {
    this.router.navigate(['dialog/login']);
  }
}
