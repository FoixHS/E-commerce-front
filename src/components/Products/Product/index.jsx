import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';

function Product({ product }) {
  return (
    <div className={styles.product}>
      <div className={styles.product_image_container}>
        <Link to={`/products/${product.id}`}>
          <img className={styles.product_image} id="product_image" src={product.image} alt={product.name} />
        </Link>
      </div>
      <div>
        <h2 className={styles.product_name}>{product.name}</h2>
        <span>{product.price}</span>
      </div>
      <button className={styles.product_button} type="button"> Añadir al carrito </button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Product;
