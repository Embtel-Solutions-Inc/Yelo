import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidemenuComponent } from './components/layout/sidemenu/sidemenu.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/site/home/home.component';
import { ShopComponent } from './components/site/shop/shop.component';
import { ShopCategoryComponent } from './components/site/shop-category/shop-category.component';
import { ProductComponent } from './components/site/product/product.component';
import { WishlistComponent } from './components/site/wishlist/wishlist.component';
import { CartComponent } from './components/site/cart/cart.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { AboutComponent } from './components/site/about/about.component';
import { FaqComponent } from './components/site/faq/faq.component';
import { CheckoutComponent } from './components/site/checkout/checkout.component';
import { TermsComponent } from './components/site/terms/terms.component';
import { PolicyComponent } from './components/site/policy/policy.component';
import { VendorComponent } from './components/site/vendor/vendor.component';
import { LoginComponent } from './components/site/login/login.component';
import { VendorRegistrationComponent } from './components/site/vendor-registration/vendor-registration.component';
import { BlogsComponent } from './components/site/blogs/blogs.component';
import { SingleBlogComponent } from './components/site/blogs/single-blog/single-blog.component';
import { OrderTrackingComponent } from './components/site/order-tracking/order-tracking.component';
import { StoreListingComponent } from './components/site/store-listing/store-listing.component';
import { AuthService } from "./auth/auth.service";
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './auth/jarwis.service';
import { RegisterComponent } from './components/site/register/register.component';
import { CustomerComponent } from './components/dashboard/customer/customer.component';
import { BeforeLoginService } from './auth/before-login.service';
import { AfterLoginService } from './auth/after-login.service';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { TokenService } from './auth/token.service';
import { ResponsePasswordComponent } from './components/forget-password/response-password/response-password.component';



const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: '', component: HomeComponent},
	{ path: 'shop', component: ShopComponent},
	{ path: 'shop-category', component: ShopCategoryComponent},
	{ path: 'product', component: ProductComponent},
	{ path: 'wishlist', component: WishlistComponent},
	{ path: 'cart', component: CartComponent},
	{ path: 'contact', component: ContactComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'faqs', component: FaqComponent},
	{ path: 'checkout', component: CheckoutComponent},
	{ path: 'terms', component: TermsComponent},
	{ path: 'policy', component: PolicyComponent},
	{ path: 'merchant', component: VendorComponent},
	{ path: 'login', component: LoginComponent,canActivate: [BeforeLoginService]},
	{ path: 'vendor-registration', component: VendorRegistrationComponent},
	{ path: 'blogs', component: BlogsComponent},
	{ path: 'single-post', component: SingleBlogComponent},
	{ path: 'order-tracking', component: OrderTrackingComponent},
	{ path: 'store-list', component: StoreListingComponent},
	{ path: 'register', component: RegisterComponent,canActivate: [BeforeLoginService]},
	{ path: 'profile', component: CustomerComponent, canActivate: [AfterLoginService]},
	{ path: 'forgot-password', component:ForgetPasswordComponent ,canActivate: [BeforeLoginService]},
	{ path: 'change-password', component:ResponsePasswordComponent ,canActivate: [BeforeLoginService]},
	{ path: '',
	  redirectTo: 'home',
	  pathMatch: 'full'
	}
];

@NgModule({
  declarations: [
	AppComponent,
	HeaderComponent,
	SidemenuComponent,
	FooterComponent,
	HomeComponent,
	ShopComponent,
	ShopCategoryComponent,
	ProductComponent,
	WishlistComponent,
	CartComponent,
 ContactComponent,
 AboutComponent,
 FaqComponent,
 CheckoutComponent,
 TermsComponent,
 PolicyComponent,
 VendorComponent,
 LoginComponent,
 VendorRegistrationComponent,
 BlogsComponent,
 SingleBlogComponent,
 OrderTrackingComponent,
 StoreListingComponent,
  RegisterComponent,
  CustomerComponent,
  ForgetPasswordComponent,
  ResponsePasswordComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes),
  FormsModule,
  HttpClientModule,
  SnotifyModule
  ],
  providers: [JarwisService,TokenService,AfterLoginService,AuthService,BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
