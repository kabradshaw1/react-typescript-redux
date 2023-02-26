import List from './index';
import { render } from '@testing-library/react';

describe('component should exist', () => {
  it('should have some text',  () => {
    let people = [
      {
        name: 'Sam',
        age: 22,
        url: 'http://www.webpage.com'
      }
    ]
    const { getByText } = render(<List people={people}/>);
  })
})
