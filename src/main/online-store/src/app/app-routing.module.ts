import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewItemsComponent} from "./item/view-items/view-items.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AddCardComponent} from "./user/add-card/add-card.component";

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
    component: AddCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
