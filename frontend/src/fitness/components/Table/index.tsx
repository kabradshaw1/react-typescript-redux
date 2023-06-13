import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Data } from '../../../utils/types'

interface Props {
  data: Data[]
}

const Table: React.FC<Props> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const margin = { top: 20, right: 30, bottom: 40, left: 90 };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      const svg = d3
        .select(ref.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3
        .scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .domain(data.map(d => d.created.toISOString()));

      // Calculate max Y value, filtering out invalid numbers
      const numericValues = data
        .map(d => parseFloat(d.data))
        .filter(value => !isNaN(value));

      const maxYValue = d3.max(numericValues) || 1;

      const y = d3
        .scaleLinear()
        .rangeRound([height, 0])
        .domain([0, maxYValue]);

      svg
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg
        .append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr('x', d => {
          const dateString = d.created;
          const dateObject = new Date(dateString);
          const isoString = dateObject.toISOString();
          return x(isoString) || 0;
        })
        .attr("y", d => {
          const value = parseFloat(d.data);
          return !isNaN(value) ? y(value) : height;
        })
        .attr("width", x.bandwidth())
        .attr("height", d => {
          const value = parseFloat(d.data);
          return !isNaN(value) ? height - y(value) : 0;
        });
    }
  }, [data]);

  return (
    <div ref={ref}/>
  )
}

export default Table;
