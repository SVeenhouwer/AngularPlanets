import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPlanetByIdComponent } from './find-planet-by-id.component';

describe('FindPlanetByIdComponent', () => {
  let component: FindPlanetByIdComponent;
  let fixture: ComponentFixture<FindPlanetByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPlanetByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPlanetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
