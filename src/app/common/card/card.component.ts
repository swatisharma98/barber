import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoxComponent } from 'src/app/box/box.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private readonly confirmDialog: MatDialog) { }

  ngOnInit(): void {
  }

  @Input("parent") public card:any;


  showDialog(){
    console.log('this.card',this.card);
    let dialogRef ;
     dialogRef = this.confirmDialog.open(BoxComponent,{
      height: '440px',
      width: '700px',
      data: this.card
    })
    // dialogRef.afterClosed().subscribe(result => {
    //   // if(result.sta)
    //   console.log('data');
    // })
  }
}
