import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  host = 'http://localhost:1337';

  constructor(private http: Http) {}

  hydrateList(list) {
    return list
      //.filter((_, i) => i < 3) // Do not fetch too much for debugging
      .mergeMap((items: [any]) => {
        return Observable.from(items)
          .mergeScan((acc, liteItem) => {
            return this.http.get(liteItem.url.replace('1337', '4200')).map(res => res.json())
              .mergeMap(item => {
                acc.push(item);
                return Observable.of(acc);
              });
          }, []).last();
      });
  }
}
