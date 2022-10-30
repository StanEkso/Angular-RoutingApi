import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListSkeleton } from './list.component';

describe('ListComponent', () => {
  let component: AlbumListSkeleton;
  let fixture: ComponentFixture<AlbumListSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumListSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumListSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
