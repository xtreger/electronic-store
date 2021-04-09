import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../models/user/user";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly urls = {
    register: "/api/register",
    login: "/api/login"
  };

  public user = new BehaviorSubject<User | null>(null);

  constructor(private readonly httpClient: HttpClient, private readonly router: Router) {
  }


  public register(register: User): Observable<User> {
    return this.httpClient.post<User>(this.urls.register, register);
  }

  public login(login: User): Observable<User> {
    return this.httpClient.post<User>(this.urls.login, login).pipe(tap((user: User) => this.handleAuthentication(user)));
  }

  private handleAuthentication(resData: User) {

    this.user.next(resData);
    localStorage.setItem('userData', JSON.stringify(resData));

  }

  public autoLogin() {
    const userData = localStorage.getItem('userData');

    if (!userData) {
      return;
    }

    const parsedUser = JSON.parse(userData);

    if (parsedUser.token) {
      this.user.next(parsedUser);
    }
  }

}
