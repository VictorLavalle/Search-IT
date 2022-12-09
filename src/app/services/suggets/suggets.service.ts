import { Suggest } from './../../interfaces/suggets';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuggetsService {


  private URL = 'http://artrune.com:8093/suggest?query=';

  constructor(private http : HttpClient, private cookieService: CookieService) {   }


  public getSuggets(searchString: string) :Observable<any> {
    let Bearer = this.cookieService.get('token');
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + Bearer});
    return this.http.get<any>(this.URL + searchString, {headers});
  }

}
