import { TestBed } from '@angular/core/testing';

import { PointCalculatorService } from './point-calculator.service';

describe('PointCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointCalculatorService = TestBed.get(PointCalculatorService);
    expect(service).toBeTruthy();
  });
});
