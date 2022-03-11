import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ProductCreateForm.module.scss';

function ProductCreateForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const onInputChange = (inputValue, setFunction) => {
    const parseValue = inputValue.replace(/\D/g, '');
    setFunction(parseValue);
  };
  const onSubmit = (data) => {
    const params = Object.keys(data).reduce((acc, elem) => (
      { ...acc, ...(data[elem] && { [elem]: data[elem] }) }), {});
    console.log(params);
  };
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3 className={styles.title_text}>Crear un producto</h3>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.group_form}>
          <label htmlFor="name">Nombre del prodcuto</label>
          <input type="text" placeholder="Nombre" {...register('name', { required: true })} />
          <span className={styles.errors}>{errors.name?.type === 'required' && 'El campo nombre es requerido'}</span>
        </div>
        <div className={styles.group_form}>
          <label htmlFor="description">Descripción del prodcuto</label>
          <textarea rows="4" placeholder="Descripción" {...register('description', { required: true })} />
          <span className={styles.errors}>{errors.description?.type === 'required' && 'El campo descripción es requerido'}</span>
        </div>
        <div className={styles.group_form}>
          <label htmlFor="price">Precio del prodcuto</label>
          <input value={price} onInput={(event) => onInputChange(event.target.value, setPrice)} type="text" placeholder="Precio" {...register('price', { required: true })} />
          <span className={styles.errors}>{errors.price?.type === 'required' && 'El campo precio es requerido'}</span>
        </div>
        <div className={styles.group_form}>
          <label htmlFor="stock">Stock del prodcuto</label>
          <input value={stock} onInput={(event) => onInputChange(event.target.value, setStock)} type="text" placeholder="Stock" {...register('stock', { required: true })} />
          <span className={styles.errors}>{errors.stock?.type === 'required' && 'El campo stock es requerido'}</span>
        </div>
        <div className={styles.group_form}>
          <label htmlFor="image">Imagen del prodcuto</label>
          <input type="text" placeholder="Url" {...register('image', { required: true })} />
          <span className={styles.errors}>{errors.image?.type === 'required' && 'El campo imagen es requerido'}</span>
        </div>
        <button className={styles.button} type="submit">Crear</button>
      </form>
    </section>
  );
}

export default ProductCreateForm;
