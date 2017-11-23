import { Component, OnInit } from '@angular/core';
import { User } from '../../common/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User;
  successMessage: string;
  errorMessage: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
