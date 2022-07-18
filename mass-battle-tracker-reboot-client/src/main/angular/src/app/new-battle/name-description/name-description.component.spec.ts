import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDescriptionComponent } from './name-description.component';

describe('NameDescriptionComponent', () => {
  let component: NameDescriptionComponent;
  let fixture: ComponentFixture<NameDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
