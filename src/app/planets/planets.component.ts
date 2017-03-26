import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html'
})
export class PlanetsComponent implements OnInit {

  planets: [Planet];

  constructor() { }

  ngOnInit() {
  }

}
