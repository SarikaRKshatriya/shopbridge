import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailsComponent } from './product-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../products.service';
import { ToastyModule } from 'ng2-toasty';
import { Router } from '@angular/router';
import {Location } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { CartComponent } from '../cart/cart.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent,
        LoginComponent,
        RegisterComponent,
        WishlistComponent,
        CartComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'login', pathMatch: 'full', component: LoginComponent },
          { path: 'register', pathMatch: 'full', component: RegisterComponent },
          { path: 'wishList', pathMatch: 'full', component: WishlistComponent },
          { path: 'cart', pathMatch: 'full', component: CartComponent }
        ]),
        ToastyModule
      ],
      providers: [
        ProductsService,
        Location
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to register ', inject([Router], (router: Router) => {
    component.navigateToregister();
    router.navigate(['/register']).then(() => {
        expect(location.path()).toBe("register");
    });
}));
it('should navigate to wishList ', inject([Router], (router: Router) => {
  component.wishList();
  router.navigate(['/wishList']).then(() => {
      expect(location.path()).toBe("wishList");
  });
}));

it('should navigate to cart ', inject([Router], (router: Router) => {
  component.cart();
  router.navigate(['/cart']).then(() => {
      expect(location.path()).toBe("cart");
  });
}));

it('should navigate to login ', inject([Router], (router: Router) => {
  component.login();
  router.navigate(['/login']).then(() => {
      expect(location.path()).toBe("login");
  });
}));

});
