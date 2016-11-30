import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Planet } from './planet';
import { PlanetService } from './planet.service';
import { Observable } from "rxjs";

@Injectable()
export class PlanetsResolve implements Resolve<[Planet]> {
  constructor(private ps: PlanetService) {}
  resolve(route: ActivatedRouteSnapshot): Observable|boolean {
    return this.ps.getPlanets();
  }
}
