import React from 'react';
import styles from './Navbar.module.scss';
import Logo from '../../../assets/images/logo/logo.jpeg';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__logo__container}>
          <h1>
            <a href="/">
              <img className={styles.header__logo__container__img} src={Logo} alt="dh-logo" />
            </a>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
