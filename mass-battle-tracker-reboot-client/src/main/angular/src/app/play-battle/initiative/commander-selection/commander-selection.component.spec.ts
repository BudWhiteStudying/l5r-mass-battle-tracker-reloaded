import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderSelectionComponent } from './commander-selection.component';

describe('CommanderSelectionComponent', () => {
  let component: CommanderSelectionComponent;
  let fixture: ComponentFixture<CommanderSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommanderSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanderSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
