import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getProductDetail } from '../../../services/products';
import styles from './ProductDetail.module.scss';
import Loading from '../../Global/Loading';
import defaultImage from '../../../assets/images/placeholder/product-default.png';
import 'react-toastify/dist/ReactToastify.css';

const colors = ['Negro', 'Rojo', 'Verde'];

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(defaultImage);

  useEffect(() => {
    const apiFetchProducts = async () => {
      setLoading(true);
      const response = await getProductDetail(id);
      setProduct(response.data.data);
      if (response.data.data.image) setImage(response.data.data.image);
      setLoading(false);
    };

    apiFetchProducts();
  }, [id]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      { loading ? <Loading /> : (
        <section className={styles.detail}>
          <div className={styles.detail__header}>
            <div className={styles.product_name_container}>
              <h1 className={styles.product_name}>{product.name}</h1>
            </div>
          </div>
          <div className={styles.detail__img}>
            <img className={styles.product_img} src={image} alt={product.name} />
          </div>
          <div className={styles.detail__content}>
            <span className={styles.product_price}>{`$ ${product.price}`}</span>
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
      ) }
    </>
  );
}

export default ProductDetail;
