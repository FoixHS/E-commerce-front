import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from '.';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

test('Register render', async () => {
  render(<Register />);
  const items = await screen.getAllByRole('heading');
  expect(items).toHaveLength(1);
});
