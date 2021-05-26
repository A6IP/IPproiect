import { Component, ViewChild, TemplateRef, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { MatDialog } from "@angular/material/dialog";

import { take } from "rxjs/operators";

@Component({
  selector: 'app-dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.css']
})
export class DialogWrapperComponent implements AfterViewInit {
  @ViewChild("dialogTemplate") dialogTemplate: TemplateRef<any>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    this.dispatchDialog();
  }

  dispatchDialog(): void {
    const dialogRef = this.dialog.open(this.dialogTemplate, {
      disableClose: false,
      panelClass: 'pclass'
    });

    dialogRef
      .afterOpened()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(["login"], {
          relativeTo: this.route,
          // skipLocationChange: true
        });
      });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(["/"]);
      });
  }
  
}
