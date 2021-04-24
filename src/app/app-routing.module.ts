import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '', pathMatch: 'full', component: ProductDetailsComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'cart', pathMatch: 'full', component: CartComponent },
  { path: 'checkout', pathMatch: 'full', component: CheckoutComponent },
  { path: 'home', pathMatch: 'full', component: ProductDetailsComponent },
  { path: 'productDetails', pathMatch: 'full', component: ProductDetailsComponent },
  { path: 'aboutUs', pathMatch: 'full', component: AboutusComponent },
  { path: 'privacyPolicy', pathMatch: 'full', component: PrivacypolicyComponent },
  { path: 'termsConditions', pathMatch: 'full', component: TermsconditionsComponent },
  { path: 'shippling', pathMatch: 'full', component: ShippingComponent },
  { path: 'contact', pathMatch: 'full', component: ContactusComponent },
  { path: 'wishList', pathMatch: 'full', component: WishlistComponent },
  { path: 'admin', pathMatch: 'full', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
