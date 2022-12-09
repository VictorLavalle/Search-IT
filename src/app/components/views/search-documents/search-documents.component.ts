import { CurrentUser } from './../../../interfaces/current-user';
import { CookieService } from 'ngx-cookie-service';
import { EmailService } from './../../../services/email/email.service';
import { DocsResponse } from './../../../interfaces/docs-response';
import { DocumentsService } from './../../../services/documents/documents.service';
import { SearchService } from './../../../services/search/search.service';
import { Component, OnInit } from '@angular/core';
import { Doc } from 'src/app/interfaces/docs-response';

@Component({
  selector: 'app-search-documents',
  templateUrl: './search-documents.component.html',
  styleUrls: ['./search-documents.component.scss']
})
export class SearchDocumentsComponent implements OnInit {

  public query : string = '';

  constructor(private searchService: SearchService, private documentService: DocumentsService, private emailService : EmailService, private cookieService: CookieService) { }

  public docs: Doc[] = [];


  ngOnInit(): void {
  }


  public search():void {
    console.log(this.query);
    this.searchService.search(this.query).subscribe(
      (data : DocsResponse) => {
        this.docs = data.results[0].response.docs;
        console.log(this.docs);
      }
    );
  }

  viewDocument($event : any) {
    if ($event.target.title !== null) {
      let fileName = $event.target.title;
      this.documentService.viewDocument(fileName).subscribe((response) => {
        console.log(response);
        let blob: Blob = response;
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = window.URL.createObjectURL(blob);
        a.click();
      });
    }
  }

  download($event : any) {
    if ($event.target.title !== null) {
      let fileName = $event.target.title;
      this.documentService.downloadDocument(fileName).subscribe((response) => {
        console.log(response);
        let filename = fileName;
         let blob: Blob = response;
         let a = document.createElement('a');
         a.download = filename;
         a.href = window.URL.createObjectURL(blob);
         console.log(a);
         a.click();
       });
    }
  }

  sendemail($event : any) {
    if ($event.target.title !== null) {
      let fileName = $event.target.title;
      let URL = 'http://artrune.com:8093/file/'+fileName;
      console.log(URL);
      let currentUser:CurrentUser = JSON.parse(this.cookieService.get('currentUser'));
      let email = currentUser.user;
      console.log(email);
      this.emailService.sendEmail(email, URL).subscribe((response) => {
        console.log(response);
      });
    }
  }


  }


