import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Discovery } from '../planet';
import { ApiService } from '../../api.service';
import { PlanetService } from '../planet.service';

@Injectable()
export class MyPlanetsResolve implements Resolve<Discovery[]> {
  constructor(
    private as: ApiService,
    private ps: PlanetService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Discovery[]> {
    return this.as.hydrateList(this.ps.getDiscoveredPlanets('y1mGy1QTqtD'));
  }
}
