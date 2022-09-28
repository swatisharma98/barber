import { AppService } from "../app.service";
import { Shop } from "../shared/interface/shop.interface";

export class ShopDataSource{

    public shopDetails: Shop[] =[];
    public filterDetails: Shop[]=[];
    constructor(public readonly shopService:AppService){
        
    }

    public loadShopData(): void{
        this.shopService.findAllShop()
            .subscribe(
               (res:any) => {
                console.log('res',res);
                if(res){
                    this.shopDetails = res;
                    console.log('shopDetails',this.shopDetails);
                
                }
                
               }
            )

       
    }

    public loadShopDataByFilter(filter:string): void{
        this.shopService.findShopByFilter(filter)
            .subscribe(
                (res:any)=>{
                    if(res){
                        this.filterDetails = res;
                        console.log('filterDetails',this.filterDetails);
                    
                    }
                }
            )
    }
}