import { TestBed } from '@angular/core/testing';

import { LaboratoireService } from './laboratoire.service';

describe('LaboratoireServiceService', () => {
  let service: LaboratoireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratoireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
