import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '.';

test('Navbar render', async () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
  const logo = await screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'dh-logo');
});
