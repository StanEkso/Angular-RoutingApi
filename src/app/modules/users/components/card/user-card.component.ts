import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: [],
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit(): void {}
}
