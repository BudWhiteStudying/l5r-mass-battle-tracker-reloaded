import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersSelectionComponent } from './leaders-selection.component';

describe('LeadersSelectionComponent', () => {
  let component: LeadersSelectionComponent;
  let fixture: ComponentFixture<LeadersSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadersSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadersSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
