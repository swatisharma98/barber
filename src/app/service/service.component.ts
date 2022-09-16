import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
