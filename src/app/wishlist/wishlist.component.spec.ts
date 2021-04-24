import { ComponentFixture, TestBed ,inject} from '@angular/core/testing';

import { WishlistComponent } from './wishlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../products.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from '../cart/cart.component';
import { Router } from '@angular/router';
import {Location } from '@angular/common';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistComponent,
        CartComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'cart', pathMatch: 'full', component: CartComponent }
        ]),
      ],
      providers: [
        ProductsService,
        Location
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should navigate to cart ', inject([Router], (router: Router) => {
    component.cart();
    router.navigate(['/cart']).then(() => {
        expect(location.path()).toBe("cart");
    });
  }));

});
