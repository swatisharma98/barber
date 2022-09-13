import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  public dialog:any;

  constructor(private dialogRef: MatDialogRef<BoxComponent>, @Inject(MAT_DIALOG_DATA) public payload:any) {
    this.dialog = payload
    console.log('this.dialog',payload);
   }

  ngOnInit(): void {
  }

}
