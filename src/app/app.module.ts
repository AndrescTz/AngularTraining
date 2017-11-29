import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { CommonService } from './common/services/common.service';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AppRoutingModule } from './app.routing';
import { UserService } from './users/services/user.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCreateComponent,
    UserEditComponent,
    UserSingleComponent,
    UserListComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CommonService, LoginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
