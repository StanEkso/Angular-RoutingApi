import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListSkeleton implements OnInit {
  @Input() length: number = 10;
  constructor() {}
  array: undefined[];
  ngOnInit(): void {
    this.array = new Array(this.length || 10);
  }
}
