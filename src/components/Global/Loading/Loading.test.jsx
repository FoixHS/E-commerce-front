import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loading from '.';

test('Navbar render', async () => {
  render(<Loading />);
  const items = await screen.findAllByText('Cargando...');
  expect(items).toHaveLength(1);
});
