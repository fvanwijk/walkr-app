import { Component, Input, OnInit } from '@angular/core';
import { WidService } from '../../wid.service';

@Component({
  selector: 'reflection-rewards',
  templateUrl: './reflection-rewards.component.html',
  styles: []
})
export class ReflectionRewardsComponent implements OnInit {
  @Input()
  private wid: String;
  public rewards;

  constructor(private ws: WidService) { }

  ngOnInit() {
    this.rewards = this.ws.getRewards(this.wid);
  }

}
