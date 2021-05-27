import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmimPanelComponent } from './admim-panel.component';

describe('AdmimPanelComponent', () => {
  let component: AdmimPanelComponent;
  let fixture: ComponentFixture<AdmimPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmimPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmimPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
