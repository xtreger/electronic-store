import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ViewItemsComponent} from './item/view-items/view-items.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AddCardComponent} from './user/add-card/add-card.component';
import {AddAddressComponent} from './user/add-address/add-address.component';
import {AuthInterceptor} from "./auth/interceptor/auth.interceptor";
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {AddItemComponent} from './item/add-item/add-item.component';
import {ItemPageComponent} from './item/item-page/item-page.component';
import {EditItemComponent} from './item/edit-item/edit-item.component';
import {CartComponent} from './user/cart/cart.component';
import {CheckoutComponent} from './user/checkout/checkout.component';
import {ViewUsersComponent} from './user/view-users/view-users.component';
import {ViewOrdersComponent} from './user/view-orders/view-orders.component';
import {ViewOrderDetailsComponent} from './user/view-order-details/view-order-details.component';
import {ForbiddenComponent} from './auth/forbidden/forbidden.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SuccessPurchaseComponent } from './user/success-purchase/success-purchase.component';
import {FilterItems} from "./item/view-items/filter";

@NgModule({
  declarations: [
    AppComponent,
    ViewItemsComponent,
    LoginComponent,
    RegisterComponent,
    AddCardComponent,
    AddAddressComponent,
    AddItemComponent,
    ItemPageComponent,
    EditItemComponent,
    CartComponent,
    CheckoutComponent,
    ViewUsersComponent,
    ViewOrdersComponent,
    ViewOrderDetailsComponent,
    ForbiddenComponent,
    SuccessPurchaseComponent,
    FilterItems
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
