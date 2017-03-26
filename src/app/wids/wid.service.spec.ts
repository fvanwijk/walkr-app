/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WidService } from './wid.service';

describe('WidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidService]
    });
  });

  it('should ...', inject([WidService], (service: WidService) => {
    expect(service).toBeTruthy();
  }));
});
