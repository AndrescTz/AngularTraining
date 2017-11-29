import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  successMessage: string = '';
  errorMessage:  string = '';
  ngOnInit() {
    this.userService.userCreated$.subscribe( user => {
      this.successMessage = `${user.name} has been created!`;
      this.clearMessage();
    });

    this.userService.userDeleted$.subscribe( () => {
      this.successMessage = `The user has been deleted!`;
      this.clearMessage();
    });
  }

  clearMessage() {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 5000);
  }

}
