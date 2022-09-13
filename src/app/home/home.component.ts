import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    
    // },
    // {
    //   "name":"Cheese Pizza",
    //   "Price":"567",
    //   "Discount":"60%",
    //   "newPrice":"267",
    //   "url":"../../../assets/images/paneer.jpg"
    // },
    // {
    //   "name":"Cheese Pizza",
    //   "Price":"567",
    //   "Discount":"60%",
    //   "newPrice":"267",
    //   "url":"../../../assets/images/paneer.jpg"
    // },
    // {
    //   "name":"Cheese Pizza",
    //   "Price":"567",
    //   "Discount":"60%",
    //   "newPrice":"267",
    //   "url":"../../../assets/images/paneer.jpg"
    // },
    // {
    //   "name":"Cheese Pizza",
    //   "Price":"567",
    //   "Discount":"60%",
    //   "newPrice":"267",
    //   "url":"../../../assets/images/paneer.jpg"
    // }
  ];

  public scards:any=[
    {
      "name":"Bleach",
      "url":"../../../assets/image/bleach.jpg"
    },
    {
      "name":"MakeUp",
      "url":"../../../assets/image/makeup.jpg"
    },
    {
      "name":"Manicure",
      "url":"../../../assets/image/manicure.jpg"
    },
    {
      "name":"Massage",
      "url":"../../../assets/image/images.jpg"
    },
    {
      "name":"Hair Style",
      "url":"../../../assets/image/parlour.jpg"
    },
    {
      "name":"Manicure",
      "url":"../../../assets/image/manicure.jpg"
    },
    {
      "name":"Massage",
      "url":"../../../assets/image/images.jpg"
    },
    {
      "name":"Hair Style",
      "url":"../../../assets/image/parlour.jpg"
    },
    {
      "name":"Massage",
      "url":"../../../assets/image/images.jpg"
    },
    {
      "name":"Hair Style",
      "url":"../../../assets/image/parlour.jpg"
    }
  ]

  showFiller = false;

}
