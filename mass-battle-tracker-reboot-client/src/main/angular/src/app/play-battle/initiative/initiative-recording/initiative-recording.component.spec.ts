import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeRecordingComponent } from './initiative-recording.component';

describe('InitiativeRecordingComponent', () => {
  let component: InitiativeRecordingComponent;
  let fixture: ComponentFixture<InitiativeRecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiativeRecordingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
