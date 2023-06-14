import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Demo from '.';

// Mock the useSWR hook
jest.mock('swr', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Demo Component', () => {
  const mockData = [
    {
      id: 1,
      active: 10,
      heart: 80,
      created: '2023-06-14',
      steps: 1000,
      weight: 70,
    },
    // Add more mock data if needed
  ];

  beforeEach(() => {
    // Reset the mock implementation before each test
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    // Mock useSWR to return loading state
    jest.requireMock('swr').default.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(<Demo />);

    // Assert that loading message is displayed
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    // Mock useSWR to return error state
    jest.requireMock('swr').default.mockReturnValue({
      data: undefined,
      error: new Error('Failed to fetch data'),
      isLoading: false,
    });

    render(<Demo />);

    // Assert that error message is displayed
    expect(screen.getByText('Failed to load.')).toBeInTheDocument();
  });

  it('renders the table with data', () => {
    // Mock useSWR to return data
    jest.requireMock('swr').default.mockReturnValue({
      data: mockData,
      error: undefined,
      isLoading: false,
    });

    render(<Demo />);

    // Assert that the table headers and data are rendered correctly
    expect(screen.getByText('Active Energy')).toBeInTheDocument();
    expect(screen.getByText('Weight')).toBeInTheDocument();
    expect(screen.getByText('Steps')).toBeInTheDocument();
    expect(screen.getByText('Max Heart Rate')).toBeInTheDocument();

    // Assert that the table component is rendered for each data type
    expect(screen.getAllByRole('table')).toHaveLength(4);

    // You can add more specific assertions for the table data if needed
    // For example:
    expect(screen.getByText('10')).toBeInTheDocument(); // Active Energy value
    expect(screen.getByText('70')).toBeInTheDocument(); // Weight value
    expect(screen.getByText('1000')).toBeInTheDocument(); // Steps value
    expect(screen.getByText('80')).toBeInTheDocument(); // Max Heart Rate value
  });


});
