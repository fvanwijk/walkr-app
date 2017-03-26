import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: [Planet];

  constructor() { }

  ngOnInit() {
  }

}
