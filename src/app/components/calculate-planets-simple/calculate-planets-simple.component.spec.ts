import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePlanetsSimpleComponent } from './calculate-planets-simple.component';

describe('CalculatePlanetsSimpleComponent', () => {
  let component: CalculatePlanetsSimpleComponent;
  let fixture: ComponentFixture<CalculatePlanetsSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatePlanetsSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePlanetsSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
