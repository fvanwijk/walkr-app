import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Discovery, Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Injectable()
export class MyPlanetsResolve implements Resolve<[Discovery]|boolean> {
  constructor(private http: Http, private ps: PlanetService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<[Discovery]>|boolean {
    return this.ps.getDiscoveredPlanets('y1mGy1QTqtD')
      .mergeMap((discoveries: [Discovery]) => {
        return Observable.from(discoveries)
          .mergeScan((acc, liteDiscovery) => {
            return this.http.get(liteDiscovery.url.replace('1337', '4200')).map(res => res.json())
              .mergeMap(discovery => {
                acc.push(discovery);
                return Observable.of(acc);
              })
          }, []);
      });
  }
}
