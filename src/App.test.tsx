import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render the App component', () => {
  render(<App />);

  screen.getByText(/client id:/i);
  screen.getByRole('textbox', {
    name: /client id:/i,
  });
  screen.getByText(/client secret:/i);
  screen.getByRole('textbox', {
    name: /client secret:/i,
  });
  screen.getByRole('textbox', {
    name: /client secret:/i,
  });
});
