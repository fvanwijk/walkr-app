import { Component, Input, OnInit } from '@angular/core';
import { WidService } from '../../wid.service';

@Component({
  selector: 'reward-charts',
  templateUrl: './reward-charts.component.html',
  styles: []
})
export class RewardChartsComponent implements OnInit {
  @Input()
  private wid: String;
  private rewards;

  constructor(private ws: WidService) { }

  ngOnInit() {
    this.rewards = this.ws.getRewards(this.wid);
  }

}
