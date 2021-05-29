import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllTaskComponent } from './display-all-task.component';

describe('DisplayAllTaskComponent', () => {
  let component: DisplayAllTaskComponent;
  let fixture: ComponentFixture<DisplayAllTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
