import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.container}>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li className={styles.page_item} key={number}>
            <button type="button" onClick={() => paginate(number)} className={styles.page_link}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
