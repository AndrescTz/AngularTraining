import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../../common/models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id)
      .subscribe(data => {
        console.log('user was deleted');
        this.router.navigate(['/users']);
      });
  }
}
