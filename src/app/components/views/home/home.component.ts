import { DocumentsService } from './../../../services/documents/documents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private file!: File | null;
  private loading!: HTMLDivElement | null;
  private successAlert!: HTMLDivElement | null;
  private errorAlert!: HTMLDivElement | null;


  constructor(private documentService: DocumentsService) {}

  ngOnInit(): void {

  }

  onFileChange($event : any) {
    if ($event.target.files.length > 0) {
      this.file = $event.target.files[0];
      console.log(this.file);
    }
  }

  public uploadFile():void {

    this.loading = document.querySelector('.loading');
    this.successAlert = document.querySelector('.alert-success');
    this.errorAlert = document.querySelector('.alert-danger');

    const formData = new FormData();
    if(!this.file) return;
    formData.append('file', this.file);

    if(!this.loading) return;
    this.loading.style.display = 'block';

    this.documentService.uploadDocument(formData).subscribe( 
      (data) => {
        console.log(data);

        if(!this.loading) return;
        this.loading.style.display = 'none';

        if(data.message == "success"){

          if(!this.successAlert) return;
          this.successAlert.style.display = 'block';

          setTimeout(
            () => {
              if(!this.successAlert) return;
              this.successAlert.style.display = 'none';
            },3000
          );

        }else{

          if(!this.errorAlert) return;
          this.errorAlert.style.display = 'block';

          setTimeout(
            () => {
              if(!this.errorAlert) return;
              this.errorAlert.style.display = 'none';
            },3000
          );
        }

      }, 
      (error) => {
        console.log(error);

        if(!this.loading) return;
        this.loading.style.display = 'none';

        if(!this.errorAlert) return;
        this.errorAlert.style.display = 'block';
        setTimeout(
          () => {
            if(!this.errorAlert) return;
            this.errorAlert.style.display = 'none';
          },3000
        );
      }


      
    ); 

  }

}

