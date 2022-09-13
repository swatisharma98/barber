import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly confirmDialog: MatDialog) { }

  ngOnInit(): void {
  }

  showLogin(){
    let dialogRef ;
     dialogRef = this.confirmDialog.open(LoginComponent,{
      height: '600px',
      width: '510px',
      data: true
    })
  }

}
