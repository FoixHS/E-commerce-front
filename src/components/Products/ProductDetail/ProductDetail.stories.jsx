import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductDetail from '.';
import Logo from '../../../assets/images/logo/clock.jpeg';

export default {
  title: 'ProductDetail',
  component: ProductDetail,
};

const product = {
  image: Logo,
  name: 'Test',
  price: '$14.999,99',
  stock: '5',
  description: 'Lorem ipsum',
};

export function ProductDetailExample() {
  return (
    <Router>
      <ProductDetail product={product} />
    </Router>
  );
}
