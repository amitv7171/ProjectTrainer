import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailsBasedOnTrackComponentComponent } from './display-details-based-on-track-component.component';

describe('DisplayDetailsBasedOnTrackComponentComponent', () => {
  let component: DisplayDetailsBasedOnTrackComponentComponent;
  let fixture: ComponentFixture<DisplayDetailsBasedOnTrackComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailsBasedOnTrackComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetailsBasedOnTrackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
