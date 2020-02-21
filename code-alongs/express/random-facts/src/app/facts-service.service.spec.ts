import { TestBed } from '@angular/core/testing';

import { FactsServiceService } from './facts-service.service';

describe('FactsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactsServiceService = TestBed.get(FactsServiceService);
    expect(service).toBeTruthy();
  });
});
