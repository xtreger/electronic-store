import {Component, OnInit} from '@angular/core';
import {Item} from "./models/item/item";
import {UserService} from "./services/user/user.service";
import {Router} from "@angular/router";
import {User} from "./models/user/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onlineStore';

  public user: User|null = null;

  constructor(public userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.userService.autoLogin();
    this.userService.user.subscribe(u => this.user = u)
  }

  onLogoutClick() {
    this.userService.user.next(null);
    localStorage.removeItem("userData");
    this.router.navigate(["/view-items"]);
  }



}

