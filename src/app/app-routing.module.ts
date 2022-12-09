import { EditUserComponent } from './components/views/edit-user/edit-user.component';
import { UserNoAuthGuard } from './Auth/UserNoAuth/user-no-auth.guard';
import { UserAuthGuard } from './Auth/UserAuth/user-auth.guard';
import { Page404Component } from './components/views/page404/page404.component';
import { NoAuthComponent } from './components/views/no-auth/no-auth.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { UsersManagementComponent } from './components/views/users-management/users-management.component';
import { LoginComponent } from './components/views/login/login.component';
import { StatisticsComponent } from './components/views/statistics/statistics.component';
import { SearchDocumentsComponent } from './components/views/search-documents/search-documents.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',component: LoginComponent,canActivate: [UserNoAuthGuard], pathMatch: 'full'},
  { path: 'home',component: HomeComponent,canActivate: [UserAuthGuard], pathMatch: 'full'},
  { path: 'search', component: SearchDocumentsComponent,canActivate: [UserAuthGuard] ,pathMatch: 'full'},
  { path: 'statistics', component: StatisticsComponent, canActivate: [UserAuthGuard],pathMatch: 'full'},
  { path: 'login', component:LoginComponent, pathMatch: 'full'},
  { path: 'management', component: UsersManagementComponent,canActivate: [UserAuthGuard], pathMatch: 'full'},
  { path: 'edit/:id', component: EditUserComponent,canActivate: [UserAuthGuard], pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent,canActivate: [UserAuthGuard] ,pathMatch: 'full'},
  { path: 'NoAuth', component:NoAuthComponent, pathMatch: 'full'},
  { path: '**', component:Page404Component, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
