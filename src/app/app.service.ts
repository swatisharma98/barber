import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http:HttpClient) { }

 
 

  public findAllShop():any{
    return this.http.get("http://localhost:8080/api/shop").pipe(map((res) => res));
  }

  public findShopByFilter(param:string):any{
    return this.http.get("http://localhost:8080/api/shop?filter="+param).pipe(map((res) => res));
  }

  // public findShopById(id:string):any{
  //   return this.http.get("http://localhost:8080/api/shop/"+id).pipe(map((res) => res));
  // }
  
}
