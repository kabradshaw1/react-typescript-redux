import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App, { divide } from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});

// We call the 'describe function and provide a description-string as the first argument
// and a function with tests as the second:

describe('divide function', () => {
  describe('when given to integers', () => {
    it('should return a division result', () => {
      // Arrange: prepare function arguments
      // and the expected division result.
      // In this example 10 / 2 === 5:
      const [a, b, expected] = [10, 2, 5];
      // Here we use array destructuring 
      // to assing `a === 10`, `b === 2`, 
      // and `expected === 5`.

      // Act: use the `divide` function 
      // to get an actual function result
      const result = divide(a, b);

      // Assert: compare expected result
      // with a function result.
      expect(result).toEqual(expected);

    })
  })
})