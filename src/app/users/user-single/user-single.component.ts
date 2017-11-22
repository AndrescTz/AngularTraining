import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../../common/models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  user: User;
  constructor(private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
}
