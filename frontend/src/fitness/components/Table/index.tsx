import * as d3 from 'd3';
import { Data } from '../../../utils/types'
import React, { useRef, useEffect } from 'react';

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

      const xScale = d3.scaleBand()
        .domain(data.map(d => d.created))
        .rangeRound([0, width]).padding(0.1)

      const yScale = d3.scaleLinear()
        .domain([0, Math.max(...data.map(({ data }) => data))])
        .range([height, 0])

      const chart = d3.select(ref.current);

    }
  }, [data]);

  return (
    <div ref={ref}/>
  );
}

export default Table;
