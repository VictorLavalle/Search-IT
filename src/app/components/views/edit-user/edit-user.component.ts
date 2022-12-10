import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { User } from './../../../interfaces/user';
import { UsersService } from './../../../services/users/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  private id: string = '';
  public success = false;

  public updateUserForm!: FormGroup;
  public user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updateUserForm = this.createForm();
    this.cacthUser();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      password: '',
      checkboxAdmin: false,
      checkboxUpload: false,
      checkboxQuery: false,
      checkboxUserMgmt: false,
    });
  }

  public cacthUser() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.usersService.getUsers().subscribe((users) => {
      users.forEach((user) => {
        console.log(user.id);
        if (user.id == this.id) {
          this.user = user;
          console.log(this.user);
          this.updateUserForm = this.formBuilder.group({
            password: '',
            checkboxAdmin: this.user.roles.includes('admin'),
            checkboxUpload: this.user.roles.includes('upload'),
            checkboxQuery: this.user.roles.includes('query'),
            checkboxUserMgmt: this.user.roles.includes('user_mgmt'),
          });
          return;
        }
      });
    });
  }

  updateUser() {
    let roles = [];
    if (this.updateUserForm.value.checkboxAdmin) {
      roles.push('admin');
    }
    if (this.updateUserForm.value.checkboxUpload) {
      roles.push('upload');
    }
    if (this.updateUserForm.value.checkboxQuery) {
      roles.push('query');
    }
    if (this.updateUserForm.value.checkboxUserMgmt) {
      roles.push('user_mgmt');
    }

    let password = this.updateUserForm.value.password;

    let user: User = {
      id: this.user.id,
      username: this.user.username,
      password: password,
      roles: roles,
    };

    this.usersService.putUsers(user).subscribe((user) => {
      console.log(user);
      this.success = true;
      this.user = user;
      this.updateView();
    });


  }

  updateView() {
    this.updateUserForm = this.formBuilder.group({
      password: '',
      checkboxAdmin: this.user.roles.includes('admin'),
      checkboxUpload: this.user.roles.includes('upload'),
      checkboxQuery: this.user.roles.includes('query'),
      checkboxUserMgmt: this.user.roles.includes('user_mgmt'),
    });
  }
}
