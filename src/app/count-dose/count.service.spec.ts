import { TestBed, inject } from '@angular/core/testing';

import { CountFlowService } from './count.service';

describe('CountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountFlowService]
    });
  });

  it('should be created', inject([CountFlowService], (service: CountFlowService) => {
    expect(service).toBeTruthy();
  }));
});
