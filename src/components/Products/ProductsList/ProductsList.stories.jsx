import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductsList from './index';
import Image from '../../../assets/images/placeholder/default.png';

export default {
  title: 'ProductsList',
  component: ProductsList,
};

const products = [
  {
    id: 1,
    image: Image,
    name: 'Test 1',
    price: '$14.999,99',
    stock: '1',
    description: 'Lorem ipsum',
  },
  {
    id: 2,
    image: Image,
    name: 'Test 2',
    price: '$24.999,99',
    stock: '2',
    description: 'Lorem ipsum',
  },
  {
    id: 3,
    image: Image,
    name: 'Test 3',
    price: '$34.999,99',
    stock: '3',
    description: 'Lorem ipsum',
  },
  {
    id: 4,
    image: Image,
    name: 'Test 4',
    price: '$44.999,99',
    stock: '4',
    description: 'Lorem ipsum',
  },
];

export function ProductListExample() {
  return (
    <Router>
      <ProductsList products={products} />
    </Router>
  );
}
