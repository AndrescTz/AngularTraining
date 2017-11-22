import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../common/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  constructor(private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

}
