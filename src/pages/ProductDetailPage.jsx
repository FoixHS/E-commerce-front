import React from 'react';

/* Components */
import Navbar from '../components/Global/Navbar';
import ProductDetail from '../components/Products/ProductDetail';
import Footer from '../components/Global/Footer';

import Logo from '../assets/images/logo/clock.jpeg';

const product = {
  id: 5,
  image: Logo,
  name: 'Test 5',
  price: '$54.999,99',
  stock: '5',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

function ProductDetailPage() {
  return (
    <>
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}

export default ProductDetailPage;
