import { CookieService } from 'ngx-cookie-service';
import { Statistics } from './../../interfaces/statistics';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private URL = 'http://artrune.com:8093/stats';

  constructor(private httpClient : HttpClient,private cookieService : CookieService) { }

  public getStatistics(): Observable<Statistics> {
    let Bearer = this.cookieService.get('token');
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + Bearer, 'accept': 'application/json'});
    return this.httpClient.get<Statistics>(this.URL, {headers});
  }
}
