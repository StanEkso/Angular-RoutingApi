import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Album } from 'src/app/models/album';
import { User } from 'src/app/models/user';
import { AlbumsService } from 'src/app/services/albums.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private albumService: AlbumsService
  ) {}
  user$: Observable<User>;
  albums$: Observable<Album[]>;
  loading = false;
  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe((values) => {
      this.user$ = this.usersService
        .getById(values['id'])
        .pipe(tap(() => (this.loading = false)));
      this.albums$ = this.albumService.getByUserId(values['id']);
    });
  }
}
