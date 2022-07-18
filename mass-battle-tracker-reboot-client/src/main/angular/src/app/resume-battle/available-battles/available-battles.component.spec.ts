import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBattlesComponent } from './available-battles.component';

describe('AvailableBattlesComponent', () => {
  let component: AvailableBattlesComponent;
  let fixture: ComponentFixture<AvailableBattlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableBattlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableBattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
