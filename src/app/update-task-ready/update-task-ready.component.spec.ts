import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskReadyComponent } from './update-task-ready.component';

describe('UpdateTaskReadyComponent', () => {
  let component: UpdateTaskReadyComponent;
  let fixture: ComponentFixture<UpdateTaskReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTaskReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
