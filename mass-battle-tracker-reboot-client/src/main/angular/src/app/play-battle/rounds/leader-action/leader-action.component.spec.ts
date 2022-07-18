import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderActionComponent } from './leader-action.component';

describe('LeaderActionComponent', () => {
  let component: LeaderActionComponent;
  let fixture: ComponentFixture<LeaderActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
