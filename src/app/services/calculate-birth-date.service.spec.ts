import { TestBed } from '@angular/core/testing';

import { CalculateBirthDateService } from './calculate-birth-date.service';

describe('CalculateBirthDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateBirthDateService = TestBed.get(CalculateBirthDateService);
    expect(service).toBeTruthy();
  });
});
