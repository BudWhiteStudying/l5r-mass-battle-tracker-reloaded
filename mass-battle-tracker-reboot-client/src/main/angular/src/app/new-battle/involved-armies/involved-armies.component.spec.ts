import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvedArmiesComponent } from './involved-armies.component';

describe('InvolvedArmiesComponent', () => {
  let component: InvolvedArmiesComponent;
  let fixture: ComponentFixture<InvolvedArmiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvedArmiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvedArmiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
