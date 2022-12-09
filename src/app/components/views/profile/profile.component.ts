import { CookieService } from 'ngx-cookie-service';
import { CurrentUser } from './../../../interfaces/current-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   public currentUser !: CurrentUser;
   private dictionaryRoles = {"upload": "Subir documentos", "admin": "Administrador", "query": "Realizar consultas","user_mgmt": "Gestionar usuarios"};
   public roles : any[] = [];
  constructor(private cookieService : CookieService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(this.cookieService.get('currentUser'));

  }

  public logout():void {
    this.cookieService.delete('currentUser');
    this.cookieService.delete('token');
    window.location.reload();
  }

}
