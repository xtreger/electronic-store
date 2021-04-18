import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/user/user";
import {map, take} from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly  router: Router,
    private readonly userService: UserService
  ) {
  }

  private static _verifyTheRoles(route: ActivatedRouteSnapshot, user: User | null): boolean {
    let found = false;

    if (!user)
      return found;

    found = user.privileges.some(p => p === route.data.authorities)
    return found;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {

    return this.userService.user.pipe(
      take(1),
      map(user => {
        const isAuth = !!user;
        console.log(isAuth);
        if (isAuth) {

          if (route.data.authorities && !AuthGuard._verifyTheRoles(route, user)) {
            return this.router.createUrlTree(['/forbidden']);
          }

          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );

  }


}

