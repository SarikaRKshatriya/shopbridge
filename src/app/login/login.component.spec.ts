import { ComponentFixture, TestBed , fakeAsync} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../products.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from "@angular/router";
import { AdminComponent } from '../admin/admin.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let location: Location;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent,
        AdminComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        ProductsService,
        Location
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('testing form submission', () => {
  //   fixture.detectChanges();
  //   component.signin();
  //   expect(component.isPresent).toEqual(true);
  // });
  // it('navigate to "/admin" redirects you to /home', fakeAsync(() => {
  //   router.navigate(["/admin"]).then(() => {
      
  //     expect(location).toBe("/home");
  //   });
  // }));
});
