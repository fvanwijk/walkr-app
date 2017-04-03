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
  private stars: Array<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.stars = Array(data.user.core.stars).fill(1);
    });
  }

}
