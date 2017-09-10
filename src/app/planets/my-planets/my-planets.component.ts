import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discovery } from '../planet';

@Component({
  selector: 'my-planets',
  templateUrl: 'my-planets.component.html'
})
export class MyPlanetsComponent implements OnInit {

  public discoveries: [Discovery];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.discoveries = data.discoveries
        .sort((a, b) => {
          return a.discovery.distance < b.discovery.distance ? -1 : 1;
        });
    });
  }

}
