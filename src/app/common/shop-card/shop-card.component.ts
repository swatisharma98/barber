import { Component,EventEmitter, OnInit,Input,Output } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }
  @Input("parent") public card:any;

  public currentVal:boolean=false;
  public currentData:any;

  @Output() public childEvent = new EventEmitter();
 
  ngOnInit(): void {
  }

  setCurrentData(){
    this.currentVal= true;
    this.currentData = this.card;
  }
  fireEvent(){
    console.log('in event');
    this.childEvent.emit({'currentVal':true,'currentData':this.card});
  }

}
