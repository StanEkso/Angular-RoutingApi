import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardSkeleton } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardSkeleton;
  let fixture: ComponentFixture<UserCardSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
