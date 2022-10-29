import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}
  users$: Observable<User[]>;
  getUsers(): Observable<User[]> {
    this.users$ = this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    return this.users$;
  }
}
