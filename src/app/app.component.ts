import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";
import { WidService } from './wids/wid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  host = '';
  user = undefined;

  constructor(
    private as: ApiService,
    private ws: WidService
  ) {
    this.host = this.as.host;
  }

  ngOnInit() {
    this.ws.getWidInfo('y1mGy1QTqtD');
  }
}
