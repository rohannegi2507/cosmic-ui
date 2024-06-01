// Button.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import AutoComplete from './AutoComplete.component';

test('renders button with label', () => {
  const data =  [{label:'test', value:'1', id:"sdfsd"}]
  render(<AutoComplete options= {data} />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});
