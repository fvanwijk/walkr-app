import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planets: [Planet];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { planets: { results: [Planet] } }) => {
      this.planets = data.planets.results;
    });
  }

}
