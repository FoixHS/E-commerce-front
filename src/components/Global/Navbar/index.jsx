import React from 'react';
import styles from './Navbar.module.scss';
import Logo from '../../../assets/images/logo/logo.svg';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.logo_container}>
          <a className={styles.logo_link} href="/">
            <img className={styles.logo_img} src={Logo} alt="dh-logo" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
