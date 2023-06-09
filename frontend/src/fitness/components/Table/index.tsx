import React from 'react';
import * as d3 from 'd3';
import { Data } from '../../../utils/types'

interface Props {
  data: Data[]
}

const Table: React.FC<Props> = ({ data }) => {
  return (
    <h1>Table</h1>
  )
}

export default Table;