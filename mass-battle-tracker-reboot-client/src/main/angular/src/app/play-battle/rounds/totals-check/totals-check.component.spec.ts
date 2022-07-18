import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsCheckComponent } from './totals-check.component';

describe('TotalsCheckComponent', () => {
  let component: TotalsCheckComponent;
  let fixture: ComponentFixture<TotalsCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
