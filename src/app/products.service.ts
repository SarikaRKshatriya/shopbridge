import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public cartInfo:any = [];
  public wishListInfo:any = [];
  public currentUserEmail:string;
   public productDetails = [
      {
       "id":1,
       "name":"Revital",
       "description":"Revital H Health Supplement Bottle Of 60 Capsules",
       "category":"vitamin",
       "quantity":1,
       "price":440,
       },
       {
       "id":2,
       "name":"Savlon Disinfectant",
       "description":"Savlon Antiseptic Disinfectant Liquid 1000 Ml",
       "category":"covid",
       "quantity":1,
       "price":276
       },
       {
       "id":3,
       "name":"Dettol Disinfectant",
       "description":"Dettol Multi-use Lime & Lemon Disinfectant Liquid Bottle Of 200 Ml",
       "category":"covid",
       "quantity":1,
       "price":86
       },
       {
       "id":4,
       "name":"Dolo",
       "description":"Dolo 650mg Strip Of 15 Tablets | Micro Labs Limited",
       "category":"none",
       "quantity":1,
       "price":26
       },
       {
        "id":5,
        "name":"N95 Mask",
        "description":"N95 Mask Packet Of 5",
        "category":"covid",
        "quantity":1,
        "price":340,
        },
        {
        "id":6,
        "name":"Ensure Diabetes",
        "description":"Ensure Diabetes Care Vanilla Diabetes Care Powder Jar Of 400 ",
        "category":"diabetes",
        "quantity":1,
        "price":641
        },
        {
        "id":7,
        "name":"Digene",
        "description":"Digene Acidity & Gas Relief Tablets 15s- Mint Flavour",
        "category":"none",
        "quantity":1,
        "price":17
        },
        {
        "id":8,
        "name":"Accu-chek",
        "description":"Accu-chek Active Glucometer Kit (with Free 10 Strips)",
        "category":"diabetes",
        "quantity":1,
        "price":1400
        },
        {
          "id":9,
          "name":"Zincovit",
          "description":"Zincovit Bottle Of 200ml Syrup (Green)",
          "category":"vitamin",
          "quantity":1,
          "price":115
          }
        
       
     ];
  public userinfo:any = [
    {
     name: "Ms.Shivani",
    email: "shivani@thinkbridge.in", 
    phone: 123456789,
    password: "Xyz54321",
    address: "Baner",
    city: "Pune",
    country: "India",
    pin:411045
    }
  ];
  public adminInfo:any =[
    {
      "email":"admin",
      "password":"admin123"
    }
  ];

  constructor(private http: HttpClient) { }

  getAdminDetails(){
    return this.adminInfo;
  }

  getProductDetails(){
    return this.productDetails;
  }
  addProduct(data){
   this.productDetails.push(data);     
  }
    deleteProduct(id){
       this.productDetails.forEach((item,index)=>{
        if(item.id == id){
          this.productDetails.splice(index,1);
        }
       });
    }
  
    editProductDetails(data){
      this.productDetails.forEach(item=>{
        if(item.id == data.id){
          item.id =data.id,
          item.name= data.name,
          item.description =data.description,
          item.category= data.category,
          item.quantity =data.quantity,
          item.price= data.price
        }
      });
      }
  getUsersDetails(){
    return this.userinfo;
  }
  setUsersDetails(data){
   this.userinfo.push(data);
  }
  deleteUserData(email){
    this.userinfo.forEach((item,index)=>{
      if(item.email == email){
        this.userinfo.splice(index,1);
      }
     });
  }
  getUserLoggedIn(){
    return this.currentUserEmail;
  }
  setUserLoggedIn(email){
    this.currentUserEmail = email;
  }
  setCart(id){
    this.productDetails.forEach((item,index)=>{
      if(item.id == id){
        this.cartInfo.push(item);
      }
     });
  }

  getCart(){
    return this.cartInfo;
  }
  removeProductFromCart(id){
    this.cartInfo.forEach((item,index)=>{
      if(item.id == id){
        this.cartInfo.splice(index,1);
      }
     });
  }
  setWishList(id){
    this.productDetails.forEach((item)=>{
      if(item.id == id){
        this.wishListInfo.push(item);
      }
     });
   }

  getWishList(){
    return this.wishListInfo;
  }
  removeProductFromWishList(id){
    this.wishListInfo.forEach((item,index)=>{
      if(item.id == id){
        this.wishListInfo.splice(index,1);
      }
     });
  }

}

