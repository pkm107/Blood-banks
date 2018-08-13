import { TestBed, inject } from '@angular/core/testing';

import { StateServiceService } from './state-service.service';

describe('StateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateServiceService]
    });
  });

  it('should be created', inject([StateServiceService], (service: StateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
