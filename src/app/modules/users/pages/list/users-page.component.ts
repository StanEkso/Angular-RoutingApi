import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../../models/user';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: [],
})
export class UsersPageComponent implements OnInit {
  constructor(public userService: UsersService) {}
  loading = true;
  usersStream$: Observable<User[]>;
  ngOnInit(): void {
    this.usersStream$ = this.userService
      .getUsers()
      .pipe(tap(() => (this.loading = false)));
  }
}
