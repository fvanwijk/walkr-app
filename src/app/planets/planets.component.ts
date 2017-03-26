import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';
import { ActivatedRoute } from '@angular/router';
import { PlanetListComponent } from './planet-list/planet-list.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: [Planet];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.planets = data.planets;
    });
  }

}
