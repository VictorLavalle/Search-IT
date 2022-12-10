import { CookieService } from 'ngx-cookie-service';
import { CurrentUser } from './../../interfaces/current-user';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionStatisticsGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router:Router ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const currentUser : CurrentUser = JSON.parse(this.cookieService.get('currentUser'));

      if(!currentUser.roles.includes("admin")){
        this.router.navigate(['/profile']);
      }

      return true;
  }

}
