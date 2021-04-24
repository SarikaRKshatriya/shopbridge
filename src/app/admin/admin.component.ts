import { Component, OnInit, ViewChild  } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public productData = [];
  public usersData = [];
  public isProduct:boolean = true;
  public deleteItemId;
  public deleteUserEmail;
  public selectedID;
  public selectedName;
  public selectedDescription;
  public selectedCategory;
  public selectedPrice;
  public allProducts = [];
  editForm: FormGroup;
  public searchValue:string ="";
  public currentPage =0;
  public total = 0;
  public pageSize=8;
  public addedProduct:boolean = false;
  public deletedProduct:boolean = false;
  public closeClicked:boolean = false;
  public deletedUser:boolean = false;
  public editedProduct:boolean = false;

  public categories = [
    "covid",
    "vitamin",
    "diabetes",
    "none"
  ]

  addForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern(/[0-9]*/),
    ]),
    category: new FormControl('', Validators.required),
  });
  @ViewChild('addForm') form: FormGroup;

  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.allProducts = this.productservice.getProductDetails();
    this.usersData = this.productservice.getUsersDetails();
    this.total = this.productData.length;
    this.productData = this.allProducts;
  }
  addProducts(){
    this.addedProduct = false;
    this.addForm.reset();
    document.getElementById('add-form').style.display = 'block';
  }
  add(form){
    console.log(form);
    form.value.quantity = "1";
    this.productservice.addProduct(form.value);
    this.productData = this.productservice.getProductDetails();
    console.log(this.productData);
    this.form.reset();
    document.getElementById('add-form').style.display = 'none';
    this.total = this.productData.length;
    this.addedProduct = true;
  }
  
  products(){
    this.isProduct = true;
    this.allProducts = this.productservice.getProductDetails();
    this.productData = this.allProducts;
    this.total = this.productData.length;
  }
  users(){
    this.isProduct = false;
    this.usersData = this.productservice.getUsersDetails();
  }
  removeProduct(id){
   this.deleteItemId = id;
   document.getElementById('delete-confirm').style.display = 'block';

  }
  removeUser(email){
    this.deleteUserEmail = email;
    document.getElementById('delete-user-confirm').style.display = 'block';
  }
  editProduct(id){
    let currentValues = this.productservice.getProductDetails();
    let selectedProduct = currentValues.filter(item=> item.id == id);
    this.selectedID = selectedProduct[0]['id'];
    this.selectedName = selectedProduct[0]['name'];
    this.selectedDescription = selectedProduct[0]['description'];
    this.selectedCategory = selectedProduct[0]['category'];
    this.selectedPrice = selectedProduct[0]['price'];

    this.editForm = new FormGroup({
      id: new FormControl(this.selectedID),
      name: new FormControl(this.selectedName, Validators.required),
      description: new FormControl(this.selectedDescription, [Validators.required]),
      price: new FormControl(this.selectedPrice, [Validators.required,Validators.pattern(/[0-9]*/)]),
      category: new FormControl(this.selectedCategory, Validators.required),
    });
    document.getElementById('edit-form').style.display = 'block';
  }
  edit(form){
    this.editedProduct = true;
    form.quantity = "1";
    this.productservice.editProductDetails(form);
    this.productData = this.productservice.getProductDetails();
    document.getElementById('edit-form').style.display = 'none';
  }
  delete(){
    this.deletedProduct = true;
    this.productservice.deleteProduct(this.deleteItemId);
    this.productData = this.productservice.getProductDetails();
    document.getElementById('delete-confirm').style.display = 'none';
   }
   deleteClose() {
     this.closeClicked = true;
    document.getElementById('delete-confirm').style.display = 'none';
  }
  deleteSelectedUser(){
    this.deletedUser = true;
    this.productservice.deleteUserData(this.deleteUserEmail);
    document.getElementById('delete-user-confirm').style.display = 'none';
  }
  deleteUserClose(){
    this.closeClicked = true;
    document.getElementById('delete-user-confirm').style.display = 'none';
  }
  searchByName(){
    if(this.searchValue == ''){
      this.productData = this.allProducts;
    }
    else{
      let tempData = this.allProducts.filter(item=> item.name.toUpperCase() === this.searchValue.toUpperCase());
      this.productData = tempData;
    }
  }
  SearchByCategory(value){
    if(value == 0){
      this.productData =  this.allProducts;
    }
    else{
      let tempData = this.allProducts.filter(item=> item.category == value);
      this.productData =  tempData;
    }
  }
  pageChange(e){
    this.currentPage =e;
  }

}
