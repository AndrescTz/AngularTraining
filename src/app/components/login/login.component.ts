import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: any = {};
  constructor(private authService: AuthorizationService) { }
  ngOnInit() {
  }
  login(){
    this.authService.login(this.userLogin.login,this.userLogin.password);
  }
}
