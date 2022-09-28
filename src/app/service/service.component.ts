import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ShopDataSource } from '../home/shopDataSource';
import { AppService } from '../app.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  
})
export class ServiceComponent implements OnInit {


  


  public shopDataSource:ShopDataSource;

  constructor(private readonly shopService: AppService,private router: Router) {
    this.shopDataSource = new ShopDataSource(shopService);
    this.name = this.router.getCurrentNavigation()?.extras?.state?.['filter'];
    
   }
  public name:string ='';
  public message:any;
  public currentVal:boolean = false;
  public currentData:any;
  ngOnInit(): void {
    this.loadData();
  }

  @Output() public childEvent = new EventEmitter();

 
  private loadData(){
    this.shopDataSource.loadShopDataByFilter(this.name);
    
  }

  onMessageAdded(event:any){  
     this.currentVal = event.currentVal;
     this.currentData = event.currentData;
  }

  onValueChanged(){
    this.currentVal = false;
    this.currentData ={};
  }

  public cards:any=[
    {
      "name":"Shades",
      "Price":"567",
      "Discount":"60%",
      "newPrice":"267",
      "url":"../../../assets/image/cheese.jpg"
    },
    {
      "name":"Shades",
      "Price":"567",
      "Discount":"60%",
      "newPrice":"267",
      "url":"../../../assets/image/cheese.jpg"
    },
    {
      "name":"Shades",
      "Price":"567",
      "Discount":"60%",
      "newPrice":"267",
      "url":"../../../assets/image/cheese.jpg"
    },
    {
      "name":"Shades",
      "Price":"567",
      "Discount":"60%",
      "newPrice":"267",
      "url":"../../../assets/image/cheese.jpg"
    },
    {
      "name":"Shades",
      "Price":"567",
      "Discount":"60%",
      "newPrice":"267",
      "url":"../../../assets/image/cheese.jpg"
    }
  ]

}
