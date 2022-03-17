import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '.';

test('Navbar render', async () => {
  render(<Navbar />);
  const logo = await screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'dh-logo');
});
