import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public showCart:boolean = true;
  public cartData:any = [];  
  public total = 0;
  public deleteItemId;

  constructor(private router: Router,private productservice:ProductsService) { }

  ngOnInit(): void {
    this.cartData = this.productservice.getCart();
    this.cartData.forEach((item) => {
     this.total =this.total + (item.price * item.quantity);
    });
  
  }
  wishList(){
    this.router.navigate(['/wishList']);
  }
  addQuantity(id){
    this.cartData.forEach((item,index) => {
      if(item.id == id){
        if(item.quantity >= 0){
          this.cartData[index].quantity = this.cartData[index].quantity + 1 ;
            this.total = this.total + item.price;
        }
        else{
          console.log("error");
        }
        
      }
    });
  
  }
  removeQuantity(id){
    this.cartData.forEach((item,index) => {
      if(item.id == id){
        if(item.quantity >= 1){
          this.cartData[index].quantity = this.cartData[index].quantity - 1 ;
            this.total = this.total - item.price;
        }
      }
    });
   }
   removeProduct(id){
    this.deleteItemId = id;
    document.getElementById('delete-confirm').style.display = 'block';
   }
   delete(){
    this.productservice.removeProductFromCart(this.deleteItemId);
    this.cartData = this.productservice.getCart();
    document.getElementById('delete-confirm').style.display = 'none';
   }
   deleteClose() {
    document.getElementById('delete-confirm').style.display = 'none';
  }
  checkoutConfirm(){
    document.getElementById('checkout-confirm').style.display = 'block';
  }
  checkout(){
    document.getElementById('delete-confirm').style.display = 'none';
    this.router.navigate(['/checkout']);
  }
  checkoutClose(){
    document.getElementById('delete-confirm').style.display = 'none';
  }

}
