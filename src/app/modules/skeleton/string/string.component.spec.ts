import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringSkeleton } from './string.component';

describe('StringComponent', () => {
  let component: StringSkeleton;
  let fixture: ComponentFixture<StringSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StringSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(StringSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
