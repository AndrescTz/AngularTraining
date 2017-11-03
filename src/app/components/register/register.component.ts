import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: any = {};
  constructor(private authService: AuthorizationService) { }
  ngOnInit() {
  }
  signIn(){
    this.authService.signIn(this.newUser.login,this.newUser.password);
  }
}
