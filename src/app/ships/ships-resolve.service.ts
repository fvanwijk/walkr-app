import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ShipService } from './ship.service';
import { Ship } from './ship';
import { Observable } from 'rxjs';

@Injectable()
export class ShipsResolve implements Resolve<[Ship]|boolean> {
  constructor(private ss: ShipService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<[Ship]>|boolean {
    return this.ss.getShips()
  }
}
