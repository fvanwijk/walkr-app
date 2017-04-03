/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameProgressResolve } from './game-progress-resolve.service';

describe('GameProgressResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameProgressResolve]
    });
  });

  it('should ...', inject([GameProgressResolve], (service: GameProgressResolve) => {
    expect(service).toBeTruthy();
  }));
});
