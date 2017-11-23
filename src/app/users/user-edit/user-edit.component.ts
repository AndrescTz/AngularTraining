import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../common/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  successMessage: string;
  errorMessage: string;
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  updateUser() {
    this.successMessage = '';
    this.errorMessage = '';
    this.userService.updateUser(this.user)
      .subscribe(
        user => {
          this.successMessage = 'User was updated';
          // this.router.navigate(['/users', this.route.snapshot.params['id']]);
        },
        err => {
          this.errorMessage = 'User cannot be updated';
        }
      );
  }
}
