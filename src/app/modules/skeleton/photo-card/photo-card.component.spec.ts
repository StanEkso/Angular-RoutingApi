import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCardSkeleton } from './photo-card.component';

describe('PhotoCardComponent', () => {
  let component: PhotoCardSkeleton;
  let fixture: ComponentFixture<PhotoCardSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoCardSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoCardSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
