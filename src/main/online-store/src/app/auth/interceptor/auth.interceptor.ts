import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { exhaustMap, map, take } from 'rxjs/operators';
import {UserService} from "../../services/user/user.service";



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.userService.user.pipe(
      take(1),
      exhaustMap(user => {

        if (!user) {
          return next.handle(req);
        }

        const modifiedReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + user.token)
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
