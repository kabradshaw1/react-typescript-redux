import * as d3 from 'd3';
import { Data } from '../../../utils/types'
import React, { useRef, useEffect } from 'react';

interface Props {
  data: Data[]
}

const Table: React.FC<Props> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);

  function resize() {
    const newWidth = window.innerWidth;
    // Recalculate scales, positions, etc., and redraw the chart
  }
  useEffect(() => {
    if (data && data.length > 0) {
      const margin = { top: 20, right: 30, bottom: 65, left: 50 };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      // Clear the container
      if (ref.current) {
        ref.current.innerHTML = '';
      };

      // Format the date string to only show day and month
      const formatDate = d3.timeFormat("%b-%d");

      const xScale = d3.scaleBand()
        .domain(data.map(d => formatDate(new Date(d.created))))
        .rangeRound([0, width])
        .padding(0.1);

      const yScale = d3.scaleLinear()
        .domain([0, Math.max(...data.map(({ data }) => data))])
        .range([height, 0]);

      const chart = d3.select(ref.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Append x-axis and rotate tick labels
      chart.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text")
        .attr("transform", "rotate(-60)") // Rotate tick labels by 60 degrees
        .style("text-anchor", "end");

      // Append y-axis
      chart.append("g")
        .call(d3.axisLeft(yScale));

      const bar = chart
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.data))
        .attr('x', d => {
          const value = xScale(formatDate(new Date(d.created)));
          return (value !== undefined) ? value : 0;
        })
        .attr('y', d => yScale(d.data));

      // Append x-axis label further down
      chart.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.bottom - 10})`) // Adjust this to position label lower
        .style("text-anchor", "middle")
        .text("Created Date");

      // Append y-axis label
      chart.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Data Value");

      // Append max data value to the y-axis
      const maxValue = Math.max(...data.map(({ data }) => data));
      chart.append("text")
        .attr("x", -5)
        .attr("y", yScale(maxValue) - 5)
        .style("text-anchor", "end")
        .text(maxValue);

      // Create tooltips
      const tooltip = d3.select(ref.current)
        .append("div")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("padding", "5px")
        .style("border", "1px solid black")
        .style("border-radius", "5px");

      // Show tooltip on hover
      bar.on("mouseover", function(event, d) {
          tooltip.style("visibility", "visible");
          tooltip.html(`Date: ${formatDate(new Date(d.created))}<br/>Value: ${d.data}`);
          d3.select(this).style('fill', 'orange');
        })
        .on("mousemove", function(event) {
          tooltip.style("top", (event.pageY - 10) + "px")
                 .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function() {
          d3.select(this).style('fill', ''); // Reset to original color
        });

      bar.transition()
        .duration(1000)
        .attr('height', d => height - yScale(d.data))
        .attr('y', d => yScale(d.data));

      d3.select(window).on('resize', resize);

    };
  }, [data]);

  return (
    <div ref={ref}/>
  );
}

export default Table;
