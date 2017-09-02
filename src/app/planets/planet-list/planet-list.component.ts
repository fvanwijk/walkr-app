import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'planet-list',
  templateUrl: './planet-list.component.html'
})
export class PlanetListComponent implements OnInit {

  planets: Planet[];
  private typeColors: {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.planets = data.planets;
    });

    this.typeColors = {
      Animal: 'purple',
      Cuisine: 'red',
      Element: 'blue',
      Festival: 'orange',
      Plant: 'green',
      Solar: 'yellow',
      Unique: 'grey'
    }
  }

}
