import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Core } from '../core';
import { Wid } from '../wid';
import { WidService } from '../wid.service';
import Chart from 'chart.js'

Chart.defaults.global.defaultFontFamily = "Lato, 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

@Component({
  selector: 'game-progress',
  templateUrl: 'game-progress.component.html',
  styles: []
})
export class GameProgressComponent implements OnInit {

  private core: Core;
  public user: Wid;
  private stars: Array<any>;
  private upgrades: Array<any>;
  private colors: Array<any>;

  public upgradesOptions:any = {
    scales: {
      yAxes: [{
        type: 'linear', // Otherwise it is ordinal
        position: 'left'
      }],
      xAxes: [{
        type: 'logarithmic',
        position: 'bottom',
        ticks: {
          callback(value) {
            return value.toLocaleString('EN-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
          },
        }
      }],
    },
    tooltips: {
      callbacks: {
        title(tooltipItems, data) {
          return `Upgrade ${data.datasets[tooltipItems[0].datasetIndex].label} to level ${tooltipItems[0].yLabel}`;
        },
        label(tooltipItem, data) {
          return tooltipItem.xLabel.toLocaleString('EN-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
        }
      },
      displayColors: false
    }
  };

  constructor(
    private route: ActivatedRoute,
    private ws: WidService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.stars = Array(data.user.core.stars).fill(1);
      this.ws.getPlanetUpgrades(data.user.wid).subscribe(upgrades => {
        this.upgrades = upgrades
          //.filter(discovery => discovery.level < 7)
          .map(discovery => {
            return {
              label: discovery.planet.name,
              data: discovery.prices
                .map((price, i) => {
                  return  price.coins < 15000000 ? {
                    x: price.coins, // Price in coins
                    y: i + 1, // Level,
                  } : undefined
                }),
              fill: false,
              spanGaps: true
            };
          });

        this.colors = Array(this.upgrades.length).fill({
          //backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(255,255,255,0.5)',
          pointBackgroundColor: '#fff',
          //pointBorderColor: '#fff',
          //pointHoverBackgroundColor: '#fff',
          //pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        });
      });
    });
  }

}
