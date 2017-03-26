import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discovery } from '../planet';

@Component({
  selector: 'my-planets',
  templateUrl: 'my-planets.component.html'
})
export class MyPlanetsComponent implements OnInit {

  private discoveries: [Discovery];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.discoveries = data.discoveries;
    });
  }

}
