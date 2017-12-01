import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private isLoggedIn: boolean;
  constructor(private router: Router, private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.authService.loginSuccess$.subscribe( loginStatus => {
      this.isLoggedIn = loginStatus;
    });
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
