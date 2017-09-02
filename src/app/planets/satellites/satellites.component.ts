import { Component, OnInit } from '@angular/core';
import { Planet, Satellite } from '../planet';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'satellites',
  templateUrl: './satellites.component.html',
  styles: [`
    .ui.basic.table td.l1match {
        background: rgba(255, 69, 0, 0.25);
    }
    .ui.basic.table td.l2match {
        background: rgba(173, 255, 47, 0.25);
    }

    th.rotate {
        /* Something you can count on */
        height: 140px;
        white-space: nowrap;
    }

    th.rotate:first-child > div {
        transform: translate(135px, 60px) rotate(315deg);
    }
        
    th.rotate > div {
        transform:
        /* Magic Numbers */
        translate(12px, 60px)
        /* 45 is really 360 - 45 */
        rotate(315deg);
        width: 10px;
    }
    th.rotate > div > span {
        border-bottom: 1px solid rgba(255,255,255,.1);
        padding: 0 0 1px 0;
        display: inline-block;
        width: 160px;
    }
    th.rotate > div > span::before {
        content: '';
        border-top: 5px solid white;
    }
    tbody th {
        height: 29px;
        border-bottom: 1px solid rgba(255,255,255,.1);
    }
  `]
})
export class SatellitesComponent implements OnInit {

  planets: Planet[];
  satellites: Satellite[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.planets = data.planets;
      this.satellites = this.planets.reduce((satellites, planet): Satellite[]  => {
        return satellites.concat(planet.satellites_l2 || []);
      }, []);
    });
  }

  hasSatelliteMatch(planet: Planet, satellite: Satellite): any {
    const matcher = s => s.url == satellite.url;
    return {
      l1match: !!planet.satellites_l1.find(matcher),
      l2match: !!planet.satellites_l2.find(matcher)
    };
  }


}
