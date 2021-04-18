import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewItemsComponent} from "./item/view-items/view-items.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AddCardComponent} from "./user/add-card/add-card.component";
import {AddAddressComponent} from "./user/add-address/add-address.component";
import {AuthGuard} from "./auth/interceptor/auth.guard";
import {AddItemComponent} from "./item/add-item/add-item.component";
import {ItemPageComponent} from "./item/item-page/item-page.component";
import {EditItemComponent} from "./item/edit-item/edit-item.component";
import {CartComponent} from "./user/cart/cart.component";
import {CheckoutComponent} from "./user/checkout/checkout.component";
import {ViewUsersComponent} from "./user/view-users/view-users.component";
import {ViewOrdersComponent} from "./user/view-orders/view-orders.component";
import {ViewOrderDetailsComponent} from "./user/view-order-details/view-order-details.component";
import {ForbiddenComponent} from "./auth/forbidden/forbidden.component";
import {SuccessPurchaseComponent} from "./user/success-purchase/success-purchase.component";

const routes: Routes = [
  {
    path: "item/view-items",
    component: ViewItemsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "view-items",
    component: ViewItemsComponent
  },
  {
    path: "add-card",
    component: AddCardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-address",
    component: AddAddressComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-item",
    component: AddItemComponent,
    canActivate: [AuthGuard],
    data: {authorities: "perm:admin"}
  },
  {
    path: "item-page/:id",
    component: ItemPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit-item/:id",
    component: EditItemComponent,
    canActivate: [AuthGuard],
    data: {authorities: "perm:admin"}
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "view-users",
    component: ViewUsersComponent,
    canActivate: [AuthGuard],
    data: {authorities: "perm:admin"}
  },
  {
    path: "view-orders/:id",
    component: ViewOrdersComponent,
    canActivate: [AuthGuard],
    data: {authorities: "perm:admin"}
  },
  {
    path: "view-order-details",
    component: ViewOrderDetailsComponent,
    canActivate: [AuthGuard],
    data: {authorities: "perm:admin"}
  },
  {
    path: "forbidden",
    component: ForbiddenComponent
  },
  {
    path: "purchase-successful",
    component: SuccessPurchaseComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
