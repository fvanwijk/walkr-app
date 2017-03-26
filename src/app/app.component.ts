import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  host = '';
  user = undefined;

  constructor(private apiService: ApiService) {
    this.host = apiService.host;
  }

  getUserData() {
    this.apiService.getUser('y1mGy1QTqtD') // Temporary use hard coded WID
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnInit() {
    this.getUserData();
  }
}
