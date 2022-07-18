import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMoveComponent } from './first-move.component';

describe('FirstMoveComponent', () => {
  let component: FirstMoveComponent;
  let fixture: ComponentFixture<FirstMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
