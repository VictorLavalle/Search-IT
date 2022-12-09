import { TestBed } from '@angular/core/testing';

import { UserNoAuthGuard } from './user-no-auth.guard';

describe('UserNoAuthGuard', () => {
  let guard: UserNoAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserNoAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
