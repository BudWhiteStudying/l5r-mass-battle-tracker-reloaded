import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderSelectionComponent } from './leader-selection.component';

describe('LeaderSelectionComponent', () => {
  let component: LeaderSelectionComponent;
  let fixture: ComponentFixture<LeaderSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
