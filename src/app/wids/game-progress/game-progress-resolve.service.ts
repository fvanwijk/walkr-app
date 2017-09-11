import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WidService } from '../wid.service';
import { Wid } from '../wid';
import { environment } from "environments/environment";

@Injectable()
export class GameProgressResolve implements Resolve<Wid> {
  constructor(
    private http: Http,
    private ws: WidService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Wid> {
    return this.ws.getWidInfo('y1mGy1QTqtD')
      .mergeMap(wid => {
        return this.http.get(`//${environment.apiUrl}/api/core/${wid.level}`)
          .map(res => {
            wid.core = res.json();
            return wid;
          });
      });
  }
}
