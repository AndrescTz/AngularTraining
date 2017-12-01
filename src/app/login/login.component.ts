import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';
import { CommonService } from '../common/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password: '' };
  errorMessage: string = '';
  constructor(private service: AuthService, private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    if (this.service.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.commonService.errorMessage$.subscribe(err => {
      this.errorMessage = err;
    });
  }

  login() {
    this.service.login(this.credentials.username, this.credentials.password)
      .subscribe(res => {
        this.router.navigate(['users']);
      });
  }

}
