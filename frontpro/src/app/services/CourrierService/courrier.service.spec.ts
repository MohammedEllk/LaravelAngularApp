import { TestBed } from '@angular/core/testing';

import { CourrierService } from './courrier.service';

describe('CourrierService', () => {
  let service: CourrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
