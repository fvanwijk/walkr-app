import { Component, OnInit } from '@angular/core';
import { WidService } from './wids/wid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  user = undefined;

  constructor(
    private ws: WidService,
  ) {}

  ngOnInit() {
    this.ws.getWidInfo('y1mGy1QTqtD');
  }
}
