import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptInputToUpdateComponent } from './accept-input-to-update.component';

describe('AcceptInputToUpdateComponent', () => {
  let component: AcceptInputToUpdateComponent;
  let fixture: ComponentFixture<AcceptInputToUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptInputToUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptInputToUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
