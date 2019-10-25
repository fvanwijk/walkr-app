import { Component, Input, OnInit } from '@angular/core';

import { max, extent, range } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleTime, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { line } from 'd3-shape';

@Component({
  selector: 'reflections-percentage-rewards',
  templateUrl: './reflections-percentage-rewards.component.html',
  styles: []
})
export class ReflectionsPercentageRewardsComponent implements OnInit {
  @Input()
  public data;

  constructor() { }

  ngOnInit() {
    this.data.subscribe(data => {
      data = data.map(d => ({ ...d, completion_date: new Date(d.completion_date) }));

      const margin = { top: 20, right: 20, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

      const x = scaleTime()
      .domain(extent(data, d => d.completion_date))
      .range([0, width]);

      const y = scaleLinear()
      .domain([0, max(data, d => d.percentage)])
      .range([height, 0]);

      const xAxis = function (g) {
        g.call(axisBottom(x));
        g.selectAll('.tick line').attr('stroke', '#fff');
        g.selectAll('.domain').attr('stroke', '#fff');
        g.selectAll('text').attr('fill', '#fff');
      };

      const yAxis = function (g) {
        g.call(axisLeft(y).tickValues(range(0, 100, 10)).tickSize(-width));
        g.selectAll('.tick line').attr('stroke', '#fff');
        g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#777").attr("stroke-dasharray", "2,2");
        g.selectAll('.domain').remove();
        g.selectAll('text').attr('x', -10).attr('fill', '#fff');
      };

      const svg = select('#rewards-percentage').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

      const c = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

      c.append('g')
      .call(yAxis);

      c.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

      const percentageLine = line()
      .x(d => x(d.completion_date))
      .y(d => y(d.percentage));

      c
      .append('path')
      .attr('fill', 'transparent')
      .attr('stroke', 'rgba(145, 215, 220, 0.7)')
      .attr('d', percentageLine(data));
    });
  }

}
