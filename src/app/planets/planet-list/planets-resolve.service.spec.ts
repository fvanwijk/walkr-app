/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanetsResolveService } from './planets-resolve.service';

describe('PlanetsResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetsResolveService]
    });
  });

  it('should ...', inject([PlanetsResolveService], (service: PlanetsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
