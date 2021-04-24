import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../products.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormGroup} from '@angular/forms';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  
  var productDetails = [
    Object({
     "id":1,
     "name":"Revital",
     "description":"Revital H Health Supplement Bottle Of 60 Capsules",
     "category":"vitamin",
     "quantity":1,
     "price":440,
     }),
     Object({
     "id":2,
     "name":"Savlon Disinfectant",
     "description":"Savlon Antiseptic Disinfectant Liquid 1000 Ml",
     "category":"covid",
     "quantity":1,
     "price":276
    }),
     Object({
     "id":3,
     "name":"Dettol Disinfectant",
     "description":"Dettol Multi-use Lime & Lemon Disinfectant Liquid Bottle Of 200 Ml",
     "category":"covid",
     "quantity":1,
     "price":86
    }),
     Object({
     "id":4,
     "name":"Dolo",
     "description":"Dolo 650mg Strip Of 15 Tablets | Micro Labs Limited",
     "category":"none",
     "quantity":1,
     "price":26
    }),
     Object({
      "id":5,
      "name":"N95 Mask",
      "description":"N95 Mask Packet Of 5",
      "category":"covid",
      "quantity":1,
      "price":340,
    }),
      Object({
      "id":6,
      "name":"Ensure Diabetes",
      "description":"Ensure Diabetes Care Vanilla Diabetes Care Powder Jar Of 400 ",
      "category":"diabetes",
      "quantity":1,
      "price":641
    }),
      Object({
      "id":7,
      "name":"Digene",
      "description":"Digene Acidity & Gas Relief Tablets 15s- Mint Flavour",
      "category":"none",
      "quantity":1,
      "price":17
    }),
      Object({
      "id":8,
      "name":"Accu-chek",
      "description":"Accu-chek Active Glucometer Kit (with Free 10 Strips)",
      "category":"diabetes",
      "quantity":1,
      "price":1400
    }),
      Object({
        "id":9,
        "name":"Zincovit",
        "description":"Zincovit Bottle Of 200ml Syrup (Green)",
        "category":"vitamin",
        "quantity":1,
        "price":115
      }),
      
     
   ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule,
        NgxPaginationModule

      ],
      providers: [
        ProductsService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a FormGroup comprised of FormControls', () => {
    //component.ngOnInit();
    expect(component.addForm instanceof FormGroup).toBe(true);
    expect(component.isProduct).toEqual(true);
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
});
  
  it('should have a h2 tag of checkout', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Add Product');
  });


  it('isProduct true at first', () => {
    expect(component.isProduct).toEqual(true);
  });

  it('isProduct false on change', () => {
    component.users();
    expect(component.isProduct).toEqual(false);
  });

  it('delete user', () => {
    component.deleteSelectedUser();
    expect(component.deletedUser).toEqual(true);
  });

  it('got user data', () => {
    var users=[
      Object({      
      name: "Ms.Shivani",
       email: "shivani@thinkbridge.in", 
       phone: 123456789,
       password: "Xyz54321",
       address: "Baner",
       city: "Pune",
       country: "India",
       pin:411045
      }),
       
    ];
    component.users();
    expect(component.usersData).toEqual(users);
  });

  it('isProduct true on change', () => {
    component.products();
    expect(component.isProduct).toEqual(true);
  });

  it('Product total changed ', () => {
    component.products();
    expect(component.total).toEqual(9);
  });

  it('removeProduct', () => {
    component.removeProduct(1);
    expect(component.deleteItemId).toEqual(1);
  });

  it('removeUser', () => {
    component.removeUser("aa@abc.com");
    expect(component.deleteUserEmail).toEqual("aa@abc.com");
  });

  it('ngOnInit', () => {
    component.ngOnInit();
   // expect(component.total).toEqual(9);
    expect(component.allProducts).toEqual(productDetails);
  });

  it('SearchByCategory', () => {
    var covidData = [
       Object({
       "id":2,
       "name":"Savlon Disinfectant",
       "description":"Savlon Antiseptic Disinfectant Liquid 1000 Ml",
       "category":"covid",
       "quantity":1,
       "price":276
      }),
       Object({
       "id":3,
       "name":"Dettol Disinfectant",
       "description":"Dettol Multi-use Lime & Lemon Disinfectant Liquid Bottle Of 200 Ml",
       "category":"covid",
       "quantity":1,
       "price":86
      }),
      Object({
        "id":5,
        "name":"N95 Mask",
        "description":"N95 Mask Packet Of 5",
        "category":"covid",
        "quantity":1,
        "price":340,
      }),
        
       
     ];
     var vitamin = [
      Object({
       "id":1,
       "name":"Revital",
       "description":"Revital H Health Supplement Bottle Of 60 Capsules",
       "category":"vitamin",
       "quantity":1,
       "price":440,
       }),
         Object({
          "id":9,
          "name":"Zincovit",
          "description":"Zincovit Bottle Of 200ml Syrup (Green)",
          "category":"vitamin",
          "quantity":1,
          "price":115
        }),
        
       
     ];
    component.SearchByCategory("covid");
    expect(component.productData).toEqual(covidData);
    component.SearchByCategory("vitamin");
    expect(component.productData).toEqual(vitamin);
    component.SearchByCategory(0);
    expect(component.productData).toEqual(productDetails);
  });

  it('searchByName', () => {
    component.searchByName();
    expect(component.searchValue).toEqual('');
  });

  it('searchByName', () => {
    component.searchByName();
    expect(component.productData).toEqual(productDetails);
  });

  it('pageChange', () => {
    component.pageChange(1);
    expect(component.currentPage).toEqual(1);
  });

  it('delete Product', () => {
    component.delete();
    expect(component.deletedProduct).toEqual(true);
  });

  it('delete deleteClose', () => {
    component.deleteClose();
    expect(component.closeClicked).toEqual(true);
  });

  it('delete deleteUserClose', () => {
    component.deleteUserClose();
    expect(component.closeClicked).toEqual(true);
  });

  it('addedProduct', () => {
    component.addProducts();
    expect(component.addedProduct).toEqual(false);
  });

  it('edit Product', () => {
    var data = 
      Object({
        "id":9,
        "name":"Zincovit",
        "description":"Zincovit Bottle Of 200ml Syrup (Green)",
        "category":"vitamin",
        "quantity":1,
        "price":115
      })
    
    component.edit(data);
    expect(component.editedProduct).toEqual(true);
  });

  it('editProduct', () => {
    component.editProduct(1);
    expect(component.selectedID).toEqual(1);
    expect(component.selectedName).toEqual("Revital");
    expect(component.selectedDescription).toEqual("Revital H Health Supplement Bottle Of 60 Capsules");
    expect(component.selectedCategory).toEqual("vitamin");
    expect(component.selectedPrice).toEqual(440);
    expect(component.editForm instanceof FormGroup).toBe(true);

  });
  it('add product', () => {
    var data = {
        "id":10,
        "name":"Zincovit",
        "description":"Zincovit Bottle Of 200ml Syrup (Green)",
        "category":"vitamin",
        "price":115,
        "quantity":1
     };
   component.add();
   expect(component.addForm.value.quantity).toEqual("1");
   expect(component.addedProduct).toEqual(true);
   expect(component.total).toEqual(10);
  });

});
