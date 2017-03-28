import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Discovery } from '../planet';
import { ApiService } from '../../api.service';
import { PlanetService } from '../planet.service';

@Injectable()
export class MyPlanetsResolve implements Resolve<[Discovery]|boolean> {
  constructor(
    private as: ApiService,
    private ps: PlanetService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<[Discovery]>|boolean {
    return this.as.hydrateList(this.ps.getDiscoveredPlanets('y1mGy1QTqtD'));
  }
}
