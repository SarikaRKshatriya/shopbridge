import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public country = "India";
  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]), 
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPwd: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('India'),
    pin: new FormControl('', Validators.required),
  });
  @ViewChild('addForm') form: FormGroup;
  constructor(
    private router: Router,
    private productservice:ProductsService
       
  ) {}

  ngOnInit(): void {}

  addContact(form) {
    delete form.value.confirmPwd;
    this.productservice.setUserLoggedIn(form.value.email);
    this.productservice.setUsersDetails(form.value);
    this.form.reset();
    this.router.navigate(['/home']);
   }
   signIn(){
    this.router.navigate(['/login']);
  }

}
