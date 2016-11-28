import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  host = 'http://localhost:1337';

  constructor(private http: Http) {}

  getUser(wid): Observable<any> {
    return this.http.get(`/api/wids/${wid}`)
      .map(res => res.json());
  }
}
