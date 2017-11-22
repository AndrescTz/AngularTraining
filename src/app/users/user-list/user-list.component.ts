import { Component, OnInit } from '@angular/core';
import { User } from '../../common/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private usersService: UserService) {}
  ngOnInit() {
   this.usersService.getUsers()
      .subscribe(users => this.users = users, err => console.log(err));
  }
}
