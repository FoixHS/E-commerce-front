import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from '.';
import Logo from '../../../assets/images/logo/clock.jpeg';

const product = {
  id: 1,
  image: Logo,
  name: 'Test',
  price: '$14.999,99',
  stock: '5',
  description: 'Lorem ipsum',
};

test('Product render', async () => {
  render(
    <Router>
      <Product product={product} />
    </Router>,
  );
  const items = await screen.getAllByRole('heading', { hidden: true });
  expect(items).toHaveLength(1);
});
