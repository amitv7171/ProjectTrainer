import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormTrackerComponent } from './update-form-tracker.component';

describe('UpdateFormTrackerComponent', () => {
  let component: UpdateFormTrackerComponent;
  let fixture: ComponentFixture<UpdateFormTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
