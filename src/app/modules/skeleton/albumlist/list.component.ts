import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class AlbumListSkeleton implements OnInit {
  @Input() length: number = 10;
  @Input() showIcon: boolean = false;
  @Input() showTitle: boolean = false;
  @Input() grid: boolean = false;
  array: undefined[];
  constructor() {}

  ngOnInit(): void {
    this.array = new Array(this.length || 10);
  }
}
