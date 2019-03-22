import { TestBed, async, inject } from '@angular/core/testing';

import { UnauthGuard } from './un-auth.guard';

describe('UnauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnauthGuard]
    });
  });

  it('should ...', inject([UnauthGuard], (guard: UnauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
