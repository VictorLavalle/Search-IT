import { DocumentsService } from './../../../services/documents/documents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private fileTemp: any;
  constructor(private documentService: DocumentsService) { }

  ngOnInit(): void {
  }

  onFileChange($event : any) {
    if ($event.target.files.length > 0) {
      this.fileTemp = $event.target.files[0];
      console.log(this.fileTemp);
    }
  }

  public uploadFile():void {
    const formData = new FormData();
    formData.append('file', this.fileTemp);
    console.log(this.fileTemp);
    this.documentService.uploadDocument(formData).subscribe(
      (data ) => {
        console.log(data);
      }
    );
  }

}

