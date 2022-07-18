import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSummaryComponent } from './final-summary.component';

describe('FinalSummaryComponent', () => {
  let component: FinalSummaryComponent;
  let fixture: ComponentFixture<FinalSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
