import { TestBed } from '@angular/core/testing';

import { PermissionUserManagementGuard } from './permission-user-management.guard';

describe('PermissionUserManagementGuard', () => {
  let guard: PermissionUserManagementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionUserManagementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
