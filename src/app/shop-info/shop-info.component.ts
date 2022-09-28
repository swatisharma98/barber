import { Component, OnInit ,ViewEncapsulation,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShopInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() public childEvent = new EventEmitter();


  fireEvent(){
    
    this.childEvent.emit(false);
  }


}
