import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user/user";
import {UserService} from "../../services/user/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(() => this.router.navigate(['/view-items']));
  }
}
