import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/E2E Boilerplate for React/i);
  expect(linkElement).toBeInTheDocument();
});
