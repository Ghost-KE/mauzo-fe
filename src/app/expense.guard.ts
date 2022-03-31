import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from "./service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    let url: string = state.url;
    return this.checkLogin(url);
  }

  // @ts-ignore
  checkLogin(url: string): true | UrlTree {
    console.log("Url: " + url)
    // @ts-ignore
    let val: string = localStorage.getItem('isUserLoggedIn');

    if (val != null && val == 'true') {
      if (url == '/login')
        this.router.parseUrl('/');
      else
        return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

}
