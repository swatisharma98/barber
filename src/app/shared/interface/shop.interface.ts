import {ImageInfo} from '../interface/image.interface';

export interface Shop{
    id:string;
    shopName:string;
    address:string;
    shopTime:ShopTime[];
    service:Service;
    imageInfo:ImageInfo[];
    startDate:Date;
    expiryDate:Date;
    
}

export interface ShopTime{
    weekDays:string;
    startDate:Date;
    endDate:Date;
}

export interface Service{
    serviceName:string;
    subService:SubService;
}

export interface SubService{
    serviceName:string;
    price:BigInteger;
    duration:string;

}