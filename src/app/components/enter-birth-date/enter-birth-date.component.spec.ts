import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterBirthDateComponent } from './enter-birth-date.component';

describe('EnterBirthDateComponent', () => {
  let component: EnterBirthDateComponent;
  let fixture: ComponentFixture<EnterBirthDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterBirthDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterBirthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
