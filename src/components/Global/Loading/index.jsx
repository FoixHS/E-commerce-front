import React from 'react';
import styles from './Loading.module.scss';
import Loader from '../../../assets/images/loader/loader.gif';

function Loading() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img className={styles.loader} src={Loader} alt="loader" />
        <span className={styles.message}>
          Cargando...
        </span>
      </div>
    </section>
  );
}

export default Loading;
