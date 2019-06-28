import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCalculatePeriodComponent } from './edit-calculate-period.component';

describe('EditCalculatePeriodComponent', () => {
  let component: EditCalculatePeriodComponent;
  let fixture: ComponentFixture<EditCalculatePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCalculatePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCalculatePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
