import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptInputToGetListOfStudentsComponentComponent } from './accept-input-to-get-list-of-students-component.component';

describe('AcceptInputToGetListOfStudentsComponentComponent', () => {
  let component: AcceptInputToGetListOfStudentsComponentComponent;
  let fixture: ComponentFixture<AcceptInputToGetListOfStudentsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptInputToGetListOfStudentsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptInputToGetListOfStudentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
