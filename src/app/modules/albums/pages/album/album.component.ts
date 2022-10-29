import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    private photosService: PhotosService
  ) {}
  album$: Observable<Album>;
  photos$: Observable<Photo[]>;
  ngOnInit(): void {
    console.log(this.albumsService);
    this.route.params.subscribe((values) => {
      this.album$ = this.albumsService.getById(values['id']);
      this.photos$ = this.photosService.getByAlbumId(values['id']);
    });
  }
}
