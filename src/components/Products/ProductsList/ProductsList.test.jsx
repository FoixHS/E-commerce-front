import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from '../../../assets/images/logo/clock.jpeg';
import ProductsList from '.';

const products = [
  {
    id: 1,
    image: Logo,
    name: 'Test 1',
    price: '$14.999,99',
    stock: '1',
    description: 'Lorem ipsum',
  },
  {
    id: 2,
    image: Logo,
    name: 'Test 2',
    price: '$24.999,99',
    stock: '2',
    description: 'Lorem ipsum',
  },
  {
    id: 3,
    image: Logo,
    name: 'Test 3',
    price: '$34.999,99',
    stock: '3',
    description: 'Lorem ipsum',
  },
  {
    id: 4,
    image: Logo,
    name: 'Test 4',
    price: '$44.999,99',
    stock: '4',
    description: 'Lorem ipsum',
  },
];

test('ProductList render', async () => {
  render(
    <Router>
      <ProductsList products={products} />
    </Router>,
  );
  const items = await screen.getAllByRole('article');
  expect(items).toHaveLength(4);
});
