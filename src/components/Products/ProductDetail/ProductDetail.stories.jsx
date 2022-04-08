import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductDetail from '.';
import Image from '../../../assets/images/placeholder/default.png';

export default {
  title: 'ProductDetail',
  component: ProductDetail,
};

const product = {
  image: Image,
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
