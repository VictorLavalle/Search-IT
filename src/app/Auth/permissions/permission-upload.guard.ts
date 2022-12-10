import { CurrentUser } from './../../interfaces/current-user';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionUploadGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router:Router ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const currentUser : CurrentUser = JSON.parse(this.cookieService.get('currentUser'));

      if(currentUser.roles.includes("admin")){
        return true;
      }

      if(!currentUser.roles.includes("upload")){
        this.router.navigate(['/profile']);
      }
        return true;
  }

}
