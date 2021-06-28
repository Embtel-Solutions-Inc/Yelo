import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'shop', component: ShopComponent},
	{ path: 'shop-category', component: ShopCategoryComponent},
	{ path: 'product', component: ProductComponent},
	{ path: 'wishlist', component: WishlistComponent},
	{ path: 'cart', component: CartComponent},
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
	CartComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }