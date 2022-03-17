import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';
import styles from './ProductsList.module.scss';

function ProductsList({ products }) {
  return (
    <section className={styles.products}>
      {products.map((product) => (
        <article key={product.id} className={styles.product__container}>
          <Product key={product.id} product={product} />
        </article>
      ))}
    </section>
  );
}

ProductsList.propTypes = {
  products: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default ProductsList;
