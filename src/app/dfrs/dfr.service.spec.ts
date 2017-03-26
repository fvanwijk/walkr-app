/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DfrService } from './dfr.service';

describe('DfrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DfrService]
    });
  });

  it('should ...', inject([DfrService], (service: DfrService) => {
    expect(service).toBeTruthy();
  }));
});
