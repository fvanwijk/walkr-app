import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  user: Object;
  apiUrl: String = `${environment.apiUrl}/api/`;
  placeholder: String = 'planets/24';
  query: String;
  result: String;

  constructor(private http: Http) { }

  ngOnInit() {}

  onSubmit() {
    this.http.get(`//${environment.apiUrl}/api/${this.query || this.placeholder}`)
      .map(res => res.json())
      .subscribe(results => {
        this.result = JSON.stringify(results, undefined, 2);
      });
  }

}
