import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListSkeleton } from './photo-list.component';

describe('PhotoListComponent', () => {
  let component: PhotoListSkeleton;
  let fixture: ComponentFixture<PhotoListSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoListSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
