import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../models/album';
import { AlbumsService } from '../../services/albums/albums.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss'],
})
export class AlbumsPageComponent implements OnInit {
  constructor(private albumsService: AlbumsService) {}
  albums$: Observable<Album[]>;
  ngOnInit(): void {
    this.albums$ = this.albumsService.getAll();
  }
}
