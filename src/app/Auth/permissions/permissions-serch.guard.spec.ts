import { TestBed } from '@angular/core/testing';

import { PermissionsSerchGuard } from './permissions-serch.guard';

describe('PermissionsSerchGuard', () => {
  let guard: PermissionsSerchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionsSerchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
