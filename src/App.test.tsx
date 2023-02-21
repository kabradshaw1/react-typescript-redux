import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

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
      
    })
  })
})