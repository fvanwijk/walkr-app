import { Component, Input, OnInit } from '@angular/core';
import { WidService } from '../../wid.service';
import { max, extent, range } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleTime, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { area, stack } from 'd3-shape';

@Component({
  selector: 'reflection-rewards',
  templateUrl: './reflection-rewards.component.html',
  styles: [`
  .layer path {
      opacity: 0.5;
  }
  `]
})
export class ReflectionRewardsComponent implements OnInit {
  @Input()
  public data;

  constructor() { }

  ngOnInit() {
    const colors = {
      energy: 'blue',
      coins: 'yellow',
      resources: 'green',
      food: 'red'
    };

    const margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = 960 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    const svg = select('#rewards').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    const c = svg.append('g')
     .attr('transform', `translate(${margin.left},${margin.top})`);

    c.append('g').attr('class', 'layers');

    const x = scaleTime().range([0, width]);
    const y = scaleLinear().range([height, 0]);

    function xAxis(g) {
      g.call(axisBottom(x));
      g.selectAll('.tick line').attr('stroke', '#fff');
      g.selectAll('.domain').attr('stroke', '#fff');
      g.selectAll('text').attr('fill', '#fff');
    }

    function yAxis(g) {
      g.call(axisLeft(y));
      g.selectAll('.tick line').attr('stroke', '#fff');
      g.selectAll('.tick:not(:first-of-type) line').attr('stroke', '#777').attr('stroke-dasharray', '2,2');
      g.selectAll('.domain').remove();
      g.selectAll('text').attr('x', -10).attr('fill', '#fff');
    }

    c.append('g').attr('class', 'x axis').attr('transform', `translate(0,${height})`);
    c.append('g').attr('class', 'y axis');

    this.data.subscribe(data => {
      data = data.map(d => ({ ...d.reward, completion_date: new Date(d.completion_date) }));

      const rewardsStack = stack().keys(Object.keys(colors));
      const stackedData = rewardsStack(data);

      x.domain(extent(data, d => d.completion_date));
      y.domain([0, max(stackedData[stackedData.length - 1], d => d[1])]);

      c.select('.x.axis').call(xAxis);
      c.select('.y.axis').call(yAxis);

      const rewardArea = area()
        .x(d => x(d.data.completion_date))
        .y0(d => y(d[0]))
        .y1(d => y(d[1]));

      const layer = c.select('.layers')
        .selectAll('.layer')
        .data(stackedData);

      layer.exit().remove();

      layer
        .enter()
        .append('g')
          .attr('class', 'layer')
        .append('path')
          .attr('fill', d => colors[d.key])
          .attr('d', rewardArea);
    });
  }

}
