/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyPlanetsResolve } from './my-planets-resolve.service';

describe('MyPlanetsResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyPlanetsResolve]
    });
  });

  it('should ...', inject([MyPlanetsResolve], (service: MyPlanetsResolve) => {
    expect(service).toBeTruthy();
  }));
});
