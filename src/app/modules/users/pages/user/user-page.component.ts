import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Album } from 'src/app/modules/albums/models/album';
import { AlbumsService } from '../../../albums/services/albums/albums.service';
import { User } from '../../models/user';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: [],
})
export class UserPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private albumService: AlbumsService,
    private router: Router
  ) {}
  user$: Observable<User>;
  albums$: Observable<Album[]>;
  loading = false;
  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe((values) => {
      this.user$ = this.usersService.getById(values['id']);
      this.user$.subscribe({
        next: () => {
          this.loading = false;
        },
        error: () => {
          this.router.navigate(['/404']);
        },
      });
      this.albums$ = this.albumService.getByUserId(values['id']);
    });
  }
}
