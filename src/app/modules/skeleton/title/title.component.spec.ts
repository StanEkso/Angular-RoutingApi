import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSkeleton } from './title.component';

describe('TitleComponent', () => {
  let component: TitleSkeleton;
  let fixture: ComponentFixture<TitleSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
