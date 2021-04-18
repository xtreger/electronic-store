import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {User} from "../../models/user/user";

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  public users: User[] = [];


  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe(response =>{
      this.users = response;
    })
  }

  onViewOrders(id: number) {
    this.router.navigate(["//view-orders/"+ id]);
  }
}
