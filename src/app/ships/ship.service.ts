import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Ship } from './ship';

@Injectable()
export class ShipService {

  constructor(public http: Http) { }

  getShips(): Observable<[Ship]> {
    return this.http.get('/api/ships').map(res => res.json())
      .map(x => x.results); // Temp
  }

}
