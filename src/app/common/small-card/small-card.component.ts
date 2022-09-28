import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(obj:any){
    console.log('obj',obj);
     this.router.navigate([obj.name],{
      state:{filter:obj.name}
     })
  }


  public scards:any=[
    {
      "name":"bleach",
      "url":"../../../assets/image/bleach.jpg"
    },
    {
      "name":"makeUp",
      "url":"../../../assets/image/makeup.jpg"
    },
    {
      "name":"manicure",
      "url":"../../../assets/image/manicure.jpg"
    },
    {
      "name":"massage",
      "url":"../../../assets/image/images.jpg"
    },
    {
      "name":"Hair-Cut",
      "url":"../../../assets/image/parlour.jpg"
    },
    {
      "name":"manicure",
      "url":"../../../assets/image/manicure.jpg"
    },
    {
      "name":"massage",
      "url":"../../../assets/image/images.jpg"
    },
    {
      "name":"Hair-Cut",
      "url":"../../../assets/image/parlour.jpg"
    },
    {
      "name":"massage",
      "url":"../../../assets/image/images.jpg"
    },
    {
      "name":"Hair-Style",
      "url":"../../../assets/image/parlour.jpg"
    }
  ]


}
