import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Product from '.';
import Image from '../../../assets/images/placeholder/product-default.png';

export default {
  title: 'Product',
  component: Product,
};

const product = {
  image: Image,
  name: 'Test',
  price: '$14.999,99',
  stock: '5',
  description: 'Lorem ipsum',
};

export function ProductExample() {
  return (
    <Router>
      <Product product={product} />
    </Router>
  );
}
