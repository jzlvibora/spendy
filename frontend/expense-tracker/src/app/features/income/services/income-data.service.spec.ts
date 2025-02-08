import { TestBed } from '@angular/core/testing';

import { IncomeDataService } from './income-data.service';

describe('IncomeDataService', () => {
  let service: IncomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
