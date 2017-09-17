import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { Planet, Discovery } from './planet';
import { WidService } from '../wids/wid.service';
import { ApiService } from '../api.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment } from "environments/environment";

@Injectable()
export class PlanetService {

  constructor(
    private as: ApiService,
    private http: Http,
    private ws: WidService
  ) { }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getPlanets(): Observable<Planet[]> {
    return this.as.hydrateList(
      this.http.get(`//${environment.apiUrl}/api/planets`)
        .map(res => res.json())
        .pluck('results')
        .catch(this.handleError)
    );
  }

  getDiscoveredPlanets(wid: String): Observable<Discovery[]> {
    return this.ws.getWidInfo(wid)
      .pluck('planets')
      .catch(this.handleError)
  }

  saveDiscovery(discovery: Discovery): Observable<Discovery> {
    return this.http.put(
      discovery.url+'', // String -> string
      JSON.stringify(discovery),
      { headers: new Headers({ 'Content-Type': 'application/json' }) }
    )
      .map(res => res.json())
      .catch(this.handleError);
  }
}
