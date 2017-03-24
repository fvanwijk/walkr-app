import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ship } from '../ship';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ships: [Ship];

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.ships = data.ships;
    });
  }

}
