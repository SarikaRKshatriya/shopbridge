import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../products.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {Location } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: Router;
  let location: Location;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent,
        LoginComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'home', pathMatch: 'full', component: ProductDetailsComponent },
          { path: 'login', pathMatch: 'full', component: LoginComponent }
        ]),
        FormsModule,
        
      ],
      providers: [
        ProductsService,
        Location
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('testing form submission', () => {
  //   fixture.detectChanges();
  //   component.addContact();
  //   expect(component.form).toEqual(component.form);
  // });
    it('should navigate to login', inject([Router], (router: Router) => {
        component.signIn();
        router.navigate(['/login']).then(() => {
      
          expect(location.path()).toBe("login");
        });
    }));

  //   it('should navigate to home', inject([Router], (router: Router) => {
  //     component.addContact();
  //     router.navigate(['/home']).then(() => {
  //       expect(location.path()).toBe("home");
  //     });
  // }));
});
