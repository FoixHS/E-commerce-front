import React from 'react';
import ProductsList from './components/Products/ProductsList/index';
import Logo from './assets/images/logo/clock.jpeg';
import Navbar from './components/Global/Navbar/index';
import Footer from './components/Global/Footer/index';

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

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsList products={products} />
      <Footer />
    </div>
  );
}

export default App;
