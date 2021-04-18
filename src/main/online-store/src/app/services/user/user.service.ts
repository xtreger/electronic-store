import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../models/user/user";
import {Router} from "@angular/router";
import {map, tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Payment} from "../../models/user/card";
import {Item} from "../../models/item/item";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly urls = {
    register: "/api/register",
    login: "/api/login",
    getUsers: "/api/viewUsers"
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

  public isAdmin(): Observable<boolean|undefined> {
    return this.user.pipe(map(u => {
      return u?.privileges.some(p => p==="perm:admin");
    }));
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.urls.getUsers);
  }
}
