import { TestBed } from '@angular/core/testing';

import { CommonScrollingService } from './common-scrolling.service';

describe('CommonScrollingService', () => {
  let service: CommonScrollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonScrollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
