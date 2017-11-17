import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService) {}
  ngOnInit() {
   this.usersService.getUsers()
      .subscribe(users => this.users = users, err => console.log(err));
  }
}
