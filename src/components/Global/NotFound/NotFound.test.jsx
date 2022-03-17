import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFound from '.';

test('Navbar render', async () => {
  render(<NotFound />);
  const items = await screen.findAllByText('404 Page Not Found');
  expect(items).toHaveLength(1);
});
