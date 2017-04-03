import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Core } from '../core';
import { Wid } from '../wid';

@Component({
  selector: 'game-progress',
  templateUrl: 'game-progress.component.html',
  styles: []
})
export class GameProgressComponent implements OnInit {

  private core: Core;
  private user: Wid;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

}
