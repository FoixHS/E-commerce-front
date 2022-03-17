import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from '../../../assets/images/logo/clock.jpeg';
import ProductDetail from '.';

const product = {
  image: Logo,
  name: 'Test',
  price: '$14.999,99',
  stock: '5',
  description: 'Lorem ipsum',
};

test('ProductDetail render', async () => {
  render(<ProductDetail product={product} />);
  const items = await screen.getAllByRole('heading');
  expect(items).toHaveLength(2);
});
