import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastBattlesComponent } from './past-battles.component';

describe('PastBattlesComponent', () => {
  let component: PastBattlesComponent;
  let fixture: ComponentFixture<PastBattlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastBattlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastBattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
