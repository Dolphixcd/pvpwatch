import { TestBed } from '@angular/core/testing';

import { BlizzardAuthService } from './blizzard-auth.service';

describe('BlizzardAuthService', () => {
  let service: BlizzardAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlizzardAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
