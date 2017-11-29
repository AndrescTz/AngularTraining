import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password: '' };
  successMessage: string = '';
  errorMessage: string = '';
  constructor(private service: LoginService) { }

  ngOnInit() { }

  login() {
    this.service.login(this.credentials.username, this.credentials.password)
      .subscribe(res => {
        console.log(res.token);
        debugger;
      });
  }

}
