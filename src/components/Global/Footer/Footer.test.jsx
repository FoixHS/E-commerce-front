import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '.';

test('Navbar render', async () => {
  render(<Footer />);
  const footer = await screen.getAllByRole('heading');
  expect(footer).toHaveLength(1);
});
