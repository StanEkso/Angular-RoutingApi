import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../../models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private readonly httpClient: HttpClient) {}

  getByAlbumId(albumId: number) {
    return this.httpClient.get<Photo[]>(
      'https://jsonplaceholder.typicode.com/albums/' + albumId + '/photos'
    );
  }
}
