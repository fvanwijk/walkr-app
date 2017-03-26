/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShipsResolve } from './ships-resolve.service';

describe('ShipsResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipsResolve]
    });
  });

  it('should ...', inject([ShipsResolve], (service: ShipsResolve) => {
    expect(service).toBeTruthy();
  }));
});
