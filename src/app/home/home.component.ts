import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Shop } from '../shared/interface/shop.interface';
import { ShopDataSource } from './shopDataSource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public shopDataSource:ShopDataSource;
  public shopDetails:Shop[]=[];

  constructor(private readonly shopService: AppService) {
    this.shopDataSource = new ShopDataSource(shopService);
   }

  ngOnInit(): void {
    this.loadData();
  }


  private loadData(){
    this.shopDataSource.loadShopData();
  }
  
  title = 'barber';


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
    
  ];

  
  showFiller = false;

}
