import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMonumentByIdComponent } from './find-monument-by-id.component';

describe('FindMonumentByIdComponent', () => {
  let component: FindMonumentByIdComponent;
  let fixture: ComponentFixture<FindMonumentByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMonumentByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMonumentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
