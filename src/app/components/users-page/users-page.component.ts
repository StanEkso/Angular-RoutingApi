import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
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
