import { UserPostRequest } from './../../../interfaces/user-post-request';
import { UsersService } from './../../../services/users/users.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  createUserForm !: FormGroup;

  public users !: User[];

  constructor(private formBuilder: FormBuilder, private usersService:UsersService) { }

  ngOnInit(): void {
    this.createUserForm = this.createForm();
    this.getUser();
  }

  private createForm():FormGroup {
    return this.formBuilder.group({
      username: '',
      password: '',
      checkboxAdmin: false,
      checkboxUpload: false,
      checkboxQuery: false,
      checkboxUserMgmt: false
    });
  }

  public createUser():void {
    console.log(this.createUserForm.value);
    let roles = [];
    if (this.createUserForm.value.checkboxAdmin) {
      roles.push("admin");
    }
    if (this.createUserForm.value.checkboxUpload) {
      roles.push("upload");
    }
    if (this.createUserForm.value.checkboxQuery) {
      roles.push("query");
    }
    if (this.createUserForm.value.checkboxUserMgmt) {
      roles.push("user_mgmt");
    }

    let username = this.createUserForm.value.username;
    let password = this.createUserForm.value.password;

    let user :UserPostRequest= {
      "username": username,
      "password": password,
      "roles": roles
    }

    this.usersService.postUsers(user).subscribe(
      (data ) => {
        console.log(data);
        this.getUser();
        this.cleanFields();
      }
    );

  }

  public getUser():void {
    this.usersService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      }
    );

  }

  public deleteUser($event : any ) {
    if ($event.target.title !== null) {
      let id = $event.target.title;
      this.usersService.deleteUsers(id).subscribe(
        (data) => {
          console.log(data);
          this.getUser();
        }
      );
    }
  }


  private cleanFields():void {
    this.createUserForm.value.username = '';
    this.createUserForm.value.password = '';
    this.createUserForm.value.checkboxAdmin = false;
    this.createUserForm.value.checkboxUpload = false;
    this.createUserForm.value.checkboxQuery = false;
    this.createUserForm.value.checkboxUserMgmt = false;
  }

}
