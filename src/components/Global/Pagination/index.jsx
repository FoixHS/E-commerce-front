import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

function Pagination({ totalPages, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav data-testid="paginator" className={styles.container}>
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
  totalPages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
