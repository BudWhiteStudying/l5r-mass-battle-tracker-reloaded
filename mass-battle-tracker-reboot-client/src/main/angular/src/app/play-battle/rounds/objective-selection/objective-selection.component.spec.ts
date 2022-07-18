import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveSelectionComponent } from './objective-selection.component';

describe('ObjectiveSelectionComponent', () => {
  let component: ObjectiveSelectionComponent;
  let fixture: ComponentFixture<ObjectiveSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
