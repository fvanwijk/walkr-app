/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanetsResolve } from './planets-resolve.service';

describe('PlanetsResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetsResolve]
    });
  });

  it('should ...', inject([PlanetsResolve], (service: PlanetsResolve) => {
    expect(service).toBeTruthy();
  }));
});
