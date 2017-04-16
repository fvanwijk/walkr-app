import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Core } from '../core';
import { Wid } from '../wid';
import { WidService } from '../wid.service';

@Component({
  selector: 'game-progress',
  templateUrl: 'game-progress.component.html',
  styles: []
})
export class GameProgressComponent implements OnInit {

  private core: Core;
  private user: Wid;
  private stars: Array<any>;
  private upgrades: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private ws: WidService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.stars = Array(data.user.core.stars).fill(1);
      this.ws.getPlanetUpgrades(data.user.wid).subscribe(upgrades => {
        this.upgrades = upgrades;
      });
    });
  }

}
