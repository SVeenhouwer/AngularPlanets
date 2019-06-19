import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCalculateBirthDateComponent } from './edit-calculate-birth-date.component';

describe('EditCalculateBirthDateComponent', () => {
  let component: EditCalculateBirthDateComponent;
  let fixture: ComponentFixture<EditCalculateBirthDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCalculateBirthDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCalculateBirthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
