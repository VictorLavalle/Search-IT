import { TestBed } from '@angular/core/testing';

import { PermissionUploadGuard } from './permission-upload.guard';

describe('PermissionUploadGuard', () => {
  let guard: PermissionUploadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionUploadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
