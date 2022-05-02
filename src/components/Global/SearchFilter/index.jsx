import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchFilter.module.scss';

function SearchFilter({ searchHandler }) {
  const { register, handleSubmit, reset } = useForm();
  const [minPriceValue, setMinPriceValue] = useState('');
  const [maxPriceValue, setMaxPriceValue] = useState('');

  const onSubmit = (data) => {
    const params = Object.keys(data).reduce((acc, elem) => (
      { ...acc, ...(data[elem] && { [elem]: data[elem] }) }), {});
    searchHandler(params);
  };

  const removeFilterHandler = () => {
    reset();
    setMinPriceValue('');
    setMaxPriceValue('');
    searchHandler(null);
  };

  const onInputChange = (inputValue, setFunction) => {
    const parseValue = inputValue.replace(/\D/g, '');
    setFunction(parseValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.filter}>
      <div className={styles.container}>
        <div className={styles.search_name}>
          <label htmlFor="product_name">Nombre del item</label>
          <input {...register('name')} placeholder="Nombre" type="text" />
        </div>
        <div className={styles.search_price}>
          <label htmlFor="product_range_price">Rango de precio</label>
          <input value={minPriceValue} onInput={(event) => onInputChange(event.target.value, setMinPriceValue)} {...register('minPrice')} placeholder="Min" type="text" />
          <input value={maxPriceValue} onInput={(event) => onInputChange(event.target.value, setMaxPriceValue)} {...register('maxPrice')} placeholder="Max" type="text" />
        </div>
      </div>
      <div className={styles.buttons}>
        <button type="submit" className={styles.search_button}>
          <FaSearch style={{ marginRight: '10px' }} />
          Buscar
        </button>
        <button
          onClick={removeFilterHandler}
          type="button"
          className={styles.remover_button}
        >
          Limpiar filtros
        </button>
      </div>
    </form>
  );
}

SearchFilter.propTypes = {
  searchHandler: PropTypes.func.isRequired,
};

export default SearchFilter;
