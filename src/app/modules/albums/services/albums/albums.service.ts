import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../models/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private readonly httpClient: HttpClient) {}
  getAll(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getById(id: number): Observable<Album> {
    return this.httpClient.get<Album>(
      'https://jsonplaceholder.typicode.com/albums/' + id
    );
  }

  getByUserId(userId: number) {
    return this.httpClient.get<Album[]>(
      'https://jsonplaceholder.typicode.com/users/' + userId + '/albums'
    );
  }
}
