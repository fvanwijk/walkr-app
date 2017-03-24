/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShipsResolveService } from './ships-resolve.service';

describe('ShipsResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipsResolveService]
    });
  });

  it('should ...', inject([ShipsResolveService], (service: ShipsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
