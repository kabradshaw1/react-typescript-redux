import * as d3 from 'd3';
import { Data } from '../../../utils/types'

interface Props {
  data: Data[]
}

const Table: React.FC<Props> = ({ data }) => {
  const margin = { top: 10, right: 10, bottom: 10, left: 10};
  const width = 600 - margin.left - margin.right;
  const height = 350 - margin.top - margin.bottom;

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}></g>
    </svg>
  )
}

export default Table;
