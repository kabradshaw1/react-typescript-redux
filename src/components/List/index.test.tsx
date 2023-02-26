import List, {IProps} from './index';
import { render } from '@testing-library/react';

describe('component should exist', () => {
  it('should have some text',  () => {

    const { getByText } = render(<List people={people}/>);
  })
})
