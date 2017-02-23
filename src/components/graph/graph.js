import React, { Component } from 'react';
import './graph.css';
import * as d3 from 'd3';
import * as data from '../../data/data.json';

class Graph extends Component {
    dataLineGraph = data['line-graph'];

    componentDidMount() {
        this.convertDataForD3();
        this.createGraph(730,102);
    }

    render() {
        return (
            <svg id="graph"></svg>
        );
    }

    convertDataForD3() {
        this.dataLineGraph.forEach((data, i) => {
            data.date = Date.parse(data.date);
            data.value = Number(data.value);
        });
    }

    createGraph(width, height) {
        let x = d3
                .scaleTime().range([0, width])
                .domain(d3.extent(this.dataLineGraph, (data) => data.date));

        let y = d3
                .scaleLinear().range([height, 0])
                .domain(d3.extent(this.dataLineGraph, (data) => data.value));

        let line = d3.line()
            .x((data) => x(data.date))
            .y((data) => y(data.value));

        let graph = d3.select('#graph')
            .attr('width', width)
            .attr('height', height)
            .append('svg:g')

        // Actual line
        graph.append('svg:path')
            .classed('actual', true)
            .attr('d', line(this.dataLineGraph.filter((data) => !data.prediction)));

        // Prediction line
        graph.append('svg:path')
            .classed('prediction', true)
            .attr('d', line(this.dataLineGraph.filter((data) => data.prediction)));

        // Labels
        graph.append('svg:g')
            .classed('labels-group', true)
            .selectAll('text')
            .data(this.dataLineGraph)
            .enter()
            .append('text')
            .attr('fill', '#5C5C5C')
            .attr('text-anchor', 'middle')
            .attr('font-size', '14px')
            .classed('label', true)
            .attr('x', (data) => x(data.date))
            .attr('y', (data) => y(data.value) - 10)
            .text((data) => data.label ? this.formatDate(data.date) : '');

        // X-axis year label
        graph.append('g')
            .append('text')
            .attr('fill', '#5C5C5C')
            .attr('x', width)
            .attr('y', height)
            .attr('text-anchor', 'end')
            .attr('font-size', '14px')
            .text('2018');
    }

    formatMonth(month) {
        var months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];

        if (month !== 0 && !month) {
            return '';
        }

        return months[month];
    }

    formatDate(_date) {
        if (!_date) {
            return '';
        }
        let date = new Date(_date);
        let day = date.getDate();
        let month = this.formatMonth(date.getMonth());
        let year = date.getFullYear();
        return `${day < 10 ? '0' + day : day} ${month} ${year}`;
    }
}

export default Graph;