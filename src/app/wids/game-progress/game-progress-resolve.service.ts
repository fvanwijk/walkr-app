import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WidService } from '../wid.service';
import { Wid } from '../wid';

@Injectable()
export class GameProgressResolve implements Resolve<Wid> {
  constructor(
    private ws: WidService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Wid> {
    return this.ws.getWidInfo('y1mGy1QTqtD');
  }
}
