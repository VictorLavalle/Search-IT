import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/views/login/login.component';
import { UsersManagementComponent } from './components/views/users-management/users-management.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { SearchDocumentsComponent } from './components/views/search-documents/search-documents.component';
import { StatisticsComponent } from './components/views/statistics/statistics.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { Page404Component } from './components/views/page404/page404.component';
import { NoAuthComponent } from './components/views/no-auth/no-auth.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersManagementComponent,
    HomeComponent,
    ProfileComponent,
    SearchDocumentsComponent,
    StatisticsComponent,
    NavBarComponent,
    Page404Component,
    NoAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
