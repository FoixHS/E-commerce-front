import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './ProductEditForm.module.scss';
import { editProduct, getProductDetail } from '../../../services/products';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Global/Loading';

function ProductEditForm() {
  const {
    register, handleSubmit, setValue, formState: { errors },
  } = useForm();
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const onPriceInputChange = (inputValue, setFunction) => {
    let parseValue = inputValue.replace(/\D/g, '');
    parseValue = (parseInt(parseValue, 10) / 100).toFixed(2);
    setFunction(parseValue.toString());
  };
  const onInputChange = (inputValue, setFunction) => {
    const parseValue = inputValue.replace(/\D/g, '');
    setFunction(parseValue);
  };
  const positive = (value) => (parseInt(value, 10) > 0);
  const onSubmit = async (data) => {
    const params = {};
    for (const [name, value] of Object.entries(data)) {
      if (name === 'price' || name === 'stock') {
        params[name] = parseInt(value, 10);
      } else {
        params[name] = value;
      }
    }
    const token = window.localStorage.getItem('login-auth');
    const response = await editProduct(id, params, JSON.parse(token));
    if (response.status === 200) {
      history.push('/');
      const message = 'Producto editado ✅';
      toast.success(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const message = 'Algo salió mal 😱';
      toast.error(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    const renderValues = (prod) => {
      for (const [name, value] of Object.entries(prod)) {
        if (name === 'price') {
          setValue(name, parseFloat(value.replace(/,/g, '.')).toFixed(2));
        } else {
          setValue(name, value);
        }
      }
    };

    const apiFetchProducts = async () => {
      setLoading(true);
      const response = await getProductDetail(id);
      renderValues(response.data.data);
      setLoading(false);
    };

    apiFetchProducts();
  }, [id, setValue]);

  return (
    <section className={styles.container}>
      {loading ? <Loading /> : (
        <>
          <div className={styles.title}>
            <h3 className={styles.title_text}>Editar un producto</h3>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.group_form}>
              <label htmlFor="name">Nombre</label>
              <input type="text" placeholder="Nombre" {...register('name', { required: true })} />
              <span className={styles.errors}>{errors.name?.type === 'required' && 'El campo nombre es requerido'}</span>
            </div>
            <div className={styles.group_form}>
              <label htmlFor="description">Descripción</label>
              <textarea rows="4" placeholder="Descripción" {...register('description')} />
            </div>
            <div className={styles.group_form}>
              <label htmlFor="price">Precio</label>
              <input
                value={price}
                onInput={(event) => onPriceInputChange(event.target.value, setPrice)}
                type="text"
                placeholder="Precio"
                {...register('price', {
                  required: true,
                  validate: { positive: (value) => positive(value) },
                })}
              />
              <span className={styles.errors}>
                {errors.price?.type === 'required'
          && 'El campo precio es requerido'}

              </span>
              <span className={styles.errors}>
                {errors.price?.type === 'positive'
          && 'El precio debe ser mayor a 0'}

              </span>
            </div>
            <div className={styles.group_form}>
              <label htmlFor="stock">Stock</label>
              <input
                value={stock}
                onInput={(event) => onInputChange(event.target.value, setStock)}
                type="text"
                placeholder="Stock"
                {...register('stock', {
                  required: true,
                  validate: { positive: (value) => positive(value) },
                })}
              />
              <span className={styles.errors}>
                {errors.stock?.type === 'required'
          && 'El campo stock es requerido'}

              </span>
              <span className={styles.errors}>
                {errors.stock?.type === 'positive'
          && 'El stock debe ser mayor a 0'}

              </span>
            </div>
            <div className={styles.group_form}>
              <label htmlFor="image">Imagen</label>
              <input type="text" placeholder="Url" {...register('image')} />
            </div>
            <button className={styles.button} type="submit">Editar</button>
          </form>
        </>
      )}
    </section>
  );
}

export default ProductEditForm;
