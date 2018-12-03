import { TestBed, inject } from '@angular/core/testing';

import { NotFoundService } from './not-found.service';

describe('NotFoundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotFoundService],
    });
  });

  it('should be created', inject([NotFoundService], (service: NotFoundService) => {
    expect(service).toBeTruthy();
  }));
});
