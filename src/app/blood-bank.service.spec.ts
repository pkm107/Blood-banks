import { TestBed, inject } from '@angular/core/testing';

import { BloodBankService } from './blood-bank.service';

describe('BloodBankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloodBankService]
    });
  });

  it('should be created', inject([BloodBankService], (service: BloodBankService) => {
    expect(service).toBeTruthy();
  }));
});
