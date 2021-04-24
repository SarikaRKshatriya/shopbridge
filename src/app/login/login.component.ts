import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public error:string = "";
  public user=[];
  public isPresent:boolean = true;

  signinForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  @ViewChild('signinForm') form: FormGroup;
  constructor(private router: Router,private productservice:ProductsService) { }

  ngOnInit(): void {
  }
  signin(form) {
    if(form.value.email == "admin" && form.value.password == "admin123"){
      let isadmin = this.productservice.getAdminDetails();
      if(isadmin[0].email == form.value.email && isadmin[0].password == form.value.password){
      this.router.navigate(['/admin']);
      }
    }
    else{
      this.user = this.productservice.getUsersDetails();
      this.user.forEach(item=>{
        if(item.email === form.value.email){
          if(item.password === this.form.value.password){
            this.productservice.setUserLoggedIn(form.value.email);
            this.router.navigate(['/home']);
          }
        }
        else{
          this.isPresent = false;
        }
      });
    }

  }

}
