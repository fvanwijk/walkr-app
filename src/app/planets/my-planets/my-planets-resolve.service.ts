import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Discovery } from '../planet';
import { PlanetService } from '../planet.service';

@Injectable()
export class MyPlanetsResolve implements Resolve<[Discovery]|boolean> {
  constructor(private ps: PlanetService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<[Discovery]>|boolean {
    return this.ps.getDiscoveredPlanets('y1mGy1QTqtD');
  }
}
