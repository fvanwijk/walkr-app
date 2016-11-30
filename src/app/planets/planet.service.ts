import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Http } from '@angular/http';

@Injectable()
export class PlanetService {

  constructor(private http: Http) { }

  getPlanets(): Observable<any> {
    return this.http.get('/api/planets')
      .map(res => res.json());
  }
}
