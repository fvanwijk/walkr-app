import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Wid } from './wid';

@Injectable()
export class WidService {

  constructor(private http: Http) { }

  getWidInfo(wid: String): Observable<Wid> {
    return this.http.get(`/api/wids/${wid}`).map(res => res.json());
  }

  getPlanetUpgrades(wid: String): Observable<any> {
    return this.http.get(`/api/wids/${wid}/planets/upgrades`).map(res => res.json());
  }

}
