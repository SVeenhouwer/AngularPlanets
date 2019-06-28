import { TestBed } from '@angular/core/testing';

import { CalculatedPeriodService } from './calculated-period.service';

describe('CalculatedPeriodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatedPeriodService = TestBed.get(CalculatedPeriodService);
    expect(service).toBeTruthy();
  });
});
