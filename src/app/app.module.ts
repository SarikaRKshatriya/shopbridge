import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsService } from './products.service';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    NavigationComponent,
    AboutusComponent,
    PrivacypolicyComponent,
    TermsconditionsComponent,
    ShippingComponent,
    ContactusComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastyModule.forRoot(),
    NgxPaginationModule
    // HeaderComponent,
    // FooterComponent,
  ],
//   exports: [
//     HeaderComponent,
//     FooterComponent,
// ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
