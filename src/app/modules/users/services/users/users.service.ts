import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(
      'https://jsonplaceholder.typicode.com/users/' + id
    );
  }
}
