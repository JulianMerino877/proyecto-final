import { TestBed } from '@angular/core/testing';

import { profesionalService } from './profesional.service';

describe('profesionalService', () => {
  let service: profesionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(profesionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
