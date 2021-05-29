import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskDetailsComponent } from './delete-task-details.component';

describe('DeleteTaskDetailsComponent', () => {
  let component: DeleteTaskDetailsComponent;
  let fixture: ComponentFixture<DeleteTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
