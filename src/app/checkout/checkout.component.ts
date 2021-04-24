import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public userData:any = [];
  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.userData =  this.productservice.getUsersDetails();
  }

}
