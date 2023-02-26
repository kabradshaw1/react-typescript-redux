import React from "react";
import AddToList from './index';
import { render } from '@testing-library/react';

describe('Should render form', () => {
  describe('has name fields', () => {
    it('has a name label', () => {
      const { getByText } = render(<AddToList/>)
      expect(getByText('Name')).toBeInTheDocument;
    })
    it('has name input', () => {
      
    })
  })
})