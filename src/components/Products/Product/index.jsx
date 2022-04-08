import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import defaultImage from '../../../assets/images/placeholder/default.png';

function Product({ product }) {
  const image = product.image ? product.image : defaultImage;
  const options = { style: 'currency', currency: 'ARS' };
  const priceFormat = new Intl.NumberFormat('es-ar', options);
  const price = priceFormat.format(product.price);
  return (
    <div id={styles.transition} className={styles.product}>
      <Link className={styles.link} to={`/products/${product.id}`}>
        <div className={styles.product_image} id="product_image" style={{ backgroundImage: `url(${image})` }} />
      </Link>
      <div>
        <h2 className={styles.product_name}>{product.name}</h2>
        <span>{price}</span>
      </div>
      <button className={styles.product_button} type="button"> Añadir al carrito </button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Product;
