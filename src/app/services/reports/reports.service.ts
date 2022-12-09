import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {


  private URL_PDF = 'http://artrune.com:8093/pdf-report';
  private URL_CSV = 'http://artrune.com:8093/csv-report';

  constructor(private httpClient:HttpClient ,private cookieService : CookieService ) { }

  public getCsvReport() {
    let Bearer = this.cookieService.get('token');
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + Bearer, 'accept': 'application/json', 'Content-Type': 'application/json'});
    return this.httpClient.get(this.URL_CSV,{headers,responseType: 'blob'});
  }

  public getPdfReport() {
    let Bearer = this.cookieService.get('token');
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + Bearer, 'accept': 'application/json', 'Content-Type': 'application/json'});
    return this.httpClient.get(this.URL_PDF,{headers,responseType: 'blob'});
  }
}
