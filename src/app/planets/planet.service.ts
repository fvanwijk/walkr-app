import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Planet, Discovery } from './planet';
import { WidService } from '../wids/wid.service';
import { Wid } from '../wids/wid';

@Injectable()
export class PlanetService {

  constructor(private http: Http, private ws: WidService) { }

  getPlanets(): Observable<[Planet]> {
    return this.http.get('/api/planets').map(res => res.json())
      .mergeMap((data: { results: [Planet] }) => {
        return Observable.from(data.results)
          //.filter((_, i) => i < 3) // Do not fetch too much for debugging
          .mergeScan((acc, litePlanet) => {
            return this.http.get(litePlanet.url.replace('1337', '4200')).map(res => res.json())
              .concatMap(planet => {
                acc.push(planet);
                return Observable.of(acc);
              });
          }, [])
          .last();
      });
  }

  getDiscoveredPlanets(wid: String): Observable<[Discovery]> {
    return this.ws.getWidInfo(wid)
      .pluck('planets');
  }
}
