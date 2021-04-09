import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user/user";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  public currentUser: User | null = null;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.user.subscribe((user) => this.currentUser = user)
  }

}
