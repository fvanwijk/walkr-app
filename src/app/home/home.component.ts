import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiUrl: String = 'http://localhost:4200/api/';
  placeholder: String = 'planets/24';
  query: String;
  result: String;

  constructor(private http: Http) { }

  ngOnInit() {}

  onSubmit() {
    this.http.get(`${this.apiUrl}${this.query || this.placeholder}`)
      .map(res => res.json())
      .subscribe(results => {
        this.result = JSON.stringify(results, undefined, 2);
      });
  }

}
