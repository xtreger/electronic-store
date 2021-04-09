import {Component, OnInit} from '@angular/core';
import {Item} from "./models/item/item";
import {UserService} from "./services/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onlineStore';


  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.autoLogin();
  }
}

