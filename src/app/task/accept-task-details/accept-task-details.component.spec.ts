import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptTaskDetailsComponent } from './accept-task-details.component';

describe('AcceptTaskDetailsComponent', () => {
  let component: AcceptTaskDetailsComponent;
  let fixture: ComponentFixture<AcceptTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
