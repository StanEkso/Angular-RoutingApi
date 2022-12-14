import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: [],
})
export class AlbumListComponent implements OnInit {
  @Input() albums: Album[];
  constructor() {}

  ngOnInit(): void {}
}
