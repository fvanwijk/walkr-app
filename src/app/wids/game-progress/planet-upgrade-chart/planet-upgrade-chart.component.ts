import { Component, OnInit, Input } from '@angular/core';
import { WidService } from '../../wid.service';
import { extent } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleLinear, scalePow } from 'd3-scale';
import { select } from 'd3-selection';
import { symbol } from 'd3-shape';

@Component({
  selector: 'planet-upgrade-chart',
  templateUrl: 'planet-upgrade-chart.component.html',
  styles: []
})
export class PlanetUpgradeChartComponent implements OnInit {

  @Input()
  private wid: String;
  private data: Array<any>;

  constructor(private ws: WidService) { }

  ngOnInit() {
    this.ws.getPlanetUpgrades(this.wid).subscribe(upgrades => {
      this.data = upgrades
      //.filter(discovery => discovery.level < 7)
        .reduce((acc, discovery) => {
          discovery.prices.forEach(price => {
            acc.push({
              planet: discovery.planet.name,
              coins: price.coins,
              level: price.level
            });
          });
          return acc;
        }, []);

      const margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

      const x = scaleLinear()
        .domain(extent(this.data, d => d.coins))
        .range([0, width]);

      const y = scaleLinear()
        .domain([0,7])
        .range([height, 0]);

      const xAxis = function (g) {
        g.call(axisBottom(x));
        g.selectAll('.tick line').attr('stroke', '#fff');
        g.selectAll('.domain').attr('stroke', '#fff');
        g.selectAll('text').attr('fill', '#fff');
      };

      const yAxis = function (g) {
        g.call(axisLeft(y).ticks(7));
        g.selectAll('.tick line').attr('stroke', '#fff');
        g.selectAll('.domain').attr('stroke', '#fff');
        g.selectAll('text').attr('fill', '#fff');
      };

      const svg = select('#chart').append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom);

      const c = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      c.append('g')
        .call(yAxis);

      c.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(xAxis);

      c.selectAll('.point')
        .data(this.data)
        .enter().append('path')
        .attr('class', 'point')
        .attr('transform', d => {
          return `translate(${x(d.coins)},${y(d.level)})`;
        })
        .attr('d', symbol())
    });
  }

}
