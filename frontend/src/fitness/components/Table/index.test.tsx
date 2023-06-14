import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '.';
import * as d3 from 'd3';

// Mock data to be passed to the component for testing
const mockData = [
  {
    created: '2023-06-14',
    data: 50,
    id: 1,
  },
  {
    created: '2023-06-15',
    data: 100,
    id: 2,
  },
];

describe('Table Component', () => {
  it('renders the component', () => {
    render(<Table data={mockData} />);
  });

  it('renders an SVG element', () => {
    const { container } = render(<Table data={mockData} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('renders the bars', () => {
    render(<Table data={mockData} />);
    const bars = screen.getAllByRole('graphics-symbol'); // Rect elements
    expect(bars.length).toBe(mockData.length);
  });

  it('renders correct number of x-axis labels', () => {
    render(<Table data={mockData} />);
    const formatDate = d3.timeFormat("%d-%b");
    const uniqueDates = new Set(mockData.map(d => formatDate(new Date(d.created))));
    const xAxisLabels = screen.getAllByText(label => uniqueDates.has(label));
    expect(xAxisLabels.length).toBe(uniqueDates.size);
  });

  it('renders y-axis label "Data Value"', () => {
    render(<Table data={mockData} />);
    const yAxisLabel = screen.getByText('Data Value');
    expect(yAxisLabel).toBeInTheDocument();
  });
});
