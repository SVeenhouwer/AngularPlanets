import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCalculateBirthDateComponent } from './show-calculate-birth-date.component';

describe('ShowCalculateBirthDateComponent', () => {
  let component: ShowCalculateBirthDateComponent;
  let fixture: ComponentFixture<ShowCalculateBirthDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCalculateBirthDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCalculateBirthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
