import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/user/user";
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  public addUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  onAdd() {
    this.userService.register(this.addUserForm.value).subscribe(
      data => {
        this.user = data;
      }
    )
  }

  onRegisterClick() {
    this.router.navigate(["/login"]);
  }
}
