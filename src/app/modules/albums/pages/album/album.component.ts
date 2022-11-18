import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/modules/users/models/user';
import { UsersService } from 'src/app/modules/users/services/users/users.service';
import { Album } from '../../models/album';
import { Photo } from '../../models/photo';
import { AlbumsService } from '../../services/albums/albums.service';
import { PhotosService } from '../../services/photo/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: [],
})
export class AlbumComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private photosService: PhotosService,
    private userService: UsersService,
    private router: Router
  ) {}
  album$: Observable<Album>;
  photos$: Observable<Photo[]>;
  user$: Observable<User>;
  ngOnInit(): void {
    this.route.params.subscribe((values) => {
      this.album$ = this.albumsService.getById(values['id']);
      this.album$.subscribe({
        next: (value) => {
          this.user$ = this.userService.getById(value.userId);
        },
        error: () => {
          this.router.navigate(['/404']);
        },
      });
      this.photos$ = this.photosService.getByAlbumId(values['id']);
    });
  }
}
