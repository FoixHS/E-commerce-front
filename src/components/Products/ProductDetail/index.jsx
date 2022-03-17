import React from 'react';
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';
import styles from './ProductDetail.module.scss';

const colors = ['Negro', 'Rojo', 'Verde'];

function ProductDetail({ product }) {
  return (
    <section className={styles.detail}>
      <div className={styles.detail__header}>
        <div className={styles.product_name_container}>
          <h1 className={styles.product_name}>{product.name}</h1>
        </div>
      </div>
      <div className={styles.detail__img}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: product.name,
              isFluidWidth: true,
              src: product.image,
              width: 500,
              height: 225,
            },
            largeImage: {
              src: product.image,
              width: 1600,
              height: 1100,
            },
            enlargedImagePosition: 'over',
            isHintEnabled: true,
            shouldHideHintAfterFirstActivation: false,
          }}
        />
      </div>
      <div className={styles.detail__content}>
        <span className={styles.product_price}>{product.price}</span>
        <div className={styles.group_form}>
          <label className={styles.label} htmlFor="color">
            <span>Color</span>
          </label>
          <select className={styles.select} id="color" name="color">
            {colors.map((color, index) => (
              <option key={color} value={index}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.group_form}>
          <label className={styles.label} htmlFor="quantity">
            <span>Cantidad</span>
          </label>
          <input className={styles.input} id="quantity" name="quantity" type="number" />
        </div>
        <div className={styles.product_stock}>
          <h5>
            {`Stock disponible: ${product.stock}`}
          </h5>
        </div>
        <button className={styles.shop_button} type="button"> Añadir al carrito </button>
      </div>
      <div className={styles.detail__description}>
        <span className={styles.description_title}>Descripción</span>
        <p className={styles.product_description}>{product.description}</p>
      </div>
    </section>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    stock: PropTypes.string,
  }).isRequired,

};

export default ProductDetail;
