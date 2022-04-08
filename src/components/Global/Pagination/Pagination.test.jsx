import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from '.';

test('Render Pagination', async () => {
  render(<Pagination itemsPerPage={4} totalItems={20} />);
  const items = await screen.getAllByRole('button');
  expect(items).toHaveLength(5);
});
