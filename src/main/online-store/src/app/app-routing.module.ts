import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewItemsComponent} from "./item/view-items/view-items.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AddCardComponent} from "./user/add-card/add-card.component";
import {AddAddressComponent} from "./user/add-address/add-address.component";
import {AuthGuard} from "./auth/interceptor/auth.guard";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
