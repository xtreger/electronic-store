import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user/user";

export class UserService {

  private readonly urls = {
    register: "/api/register",
    login: "/api/login"
  };

  constructor(private readonly httpClient: HttpClient) {
  }


  public register(register: User): Observable<User> {
    return this.httpClient.post<User>(this.urls.register, register);
  }

  public login(login: User): Observable<User> {
    return this.httpClient.post<User>(this.urls.login, login);
  }
}
