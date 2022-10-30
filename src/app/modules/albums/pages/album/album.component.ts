import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private photosService: PhotosService,
    private userService: UsersService
  ) {}
  album$: Observable<Album>;
  photos$: Observable<Photo[]>;
  user$: Observable<User>;
  ngOnInit(): void {
    console.log(this.albumsService);
    this.route.params.subscribe((values) => {
      this.album$ = this.albumsService.getById(values['id']);
      this.album$.subscribe((value) => {
        this.user$ = this.userService.getById(value.userId);
      });
      this.photos$ = this.photosService.getByAlbumId(values['id']);
    });
  }
}
