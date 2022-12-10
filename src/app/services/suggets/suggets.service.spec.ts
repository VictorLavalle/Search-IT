import { TestBed } from '@angular/core/testing';

import { SuggetsService } from './suggets.service';

describe('SuggetsService', () => {
  let service: SuggetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
