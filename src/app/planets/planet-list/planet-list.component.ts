import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  @Input() planets: [Planet];
  private typeColors: {};

  constructor() { }

  ngOnInit() {
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
