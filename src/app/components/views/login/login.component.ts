import { CurrentUser } from 'src/app/interfaces/current-user';
import { CurrentUserService } from './../../../services/current-user/current-user.service';
import { Router } from '@angular/router';
import { LoginService } from './../../../services/login/login.service';
import { Token } from './../../../interfaces/token';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginform !: FormGroup;
  public token !: Token;

  public TokenEmpty :boolean = true;

  constructor(private fb: FormBuilder, public loginservice:LoginService, private cookieService: CookieService, private router:Router,private  currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.loginform = this.createForm();
  }

  private createForm():FormGroup {
    return this.fb.group({
      username: '',
      password: ''
    });
  }

  public onSubmit():void {
    this.loginservice.getToken(this.loginform.value.username, this.loginform.value.password).subscribe(
      (data : Token ) => {
        this.token = data;
        this.TokenEmpty = false;
        console.log(this.token);
        this.cookieService.set('token', this.token.access_token,{expires: this.token.expires_in});
        this.currentUserService.getCurrentUser().subscribe(
          (data : CurrentUser) => {
            this.cookieService.set('currentUser', JSON.stringify(data),{expires: this.token.expires_in});
          }
        );


        this.router.navigate(['/home']);
      }
    );

    console.log(this.token);
  }

}
