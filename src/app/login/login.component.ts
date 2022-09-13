import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public dialog:any;

  constructor(private dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public payload:any) {
    this.dialog = payload
    console.log('this.dialog',payload);
   }

  ngOnInit(): void {
  }

}
