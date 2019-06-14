import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateMonumentsComponent } from './calculate-monuments.component';

describe('CalculateMonumentsComponent', () => {
  let component: CalculateMonumentsComponent;
  let fixture: ComponentFixture<CalculateMonumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateMonumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateMonumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
