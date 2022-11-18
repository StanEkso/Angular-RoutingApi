import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: [],
})
export class PhotoCardComponent implements OnInit {
  @Input() photo: Photo;
  constructor() {}

  ngOnInit(): void {}
}
