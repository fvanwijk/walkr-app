import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discovery } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'my-planets',
  templateUrl: 'my-planets.component.html',
  styles: [
    `
    td.level a {
        margin: 0 3px;
    }
    `
  ]
})
export class MyPlanetsComponent implements OnInit {

  public discoveries: Discovery[];

  constructor(
    private route: ActivatedRoute,
    private ps: PlanetService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.discoveries = data.discoveries
        .sort((a, b) => {
          return a.discovery.distance < b.discovery.distance ? -1 : 1;
        });
    });
  }

  saveDiscovery(discovery) {
    this.ps.saveDiscovery(discovery)
      .subscribe(discovery => {
        this.discoveries.forEach(d => {
          if (d.url == discovery.url) {
            Object.assign(d, discovery);
          }
        });
    });
  }

  decrementLevel(e, discovery) {
    e.preventDefault();
    this.saveDiscovery(<Discovery>{ ...discovery, level: discovery.level - 1 });
  }

  incrementLevel(e, discovery) {
    e.preventDefault();
    this.saveDiscovery(<Discovery>{ ...discovery, level: discovery.level + 1 });
  }

}
