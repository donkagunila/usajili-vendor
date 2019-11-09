import { TestBed } from '@angular/core/testing';

import { OpeningService } from './opening.service';

describe('OpeningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpeningService = TestBed.get(OpeningService);
    expect(service).toBeTruthy();
  });
});
