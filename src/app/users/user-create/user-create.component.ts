import { Component, OnInit } from '@angular/core';
import { User } from '../../common/models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = { name: '', username: '', avatar: '' };
  successMessage: string;
  errorMessage: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    this.successMessage = '';
    this.errorMessage = '';
    this.userService.createUser(this.user)
      .subscribe(user => {
        this.successMessage = 'User was created';
        console.log('User was created');
        this.router.navigate(['/users']);
      });
  }
}
