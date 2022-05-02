import React from 'react';
import { ToastContainer } from 'react-toastify';
import styles from './Navbar.module.scss';
import Logo from '../../../assets/images/logo/logo.svg';
import LoggedOutNavbarItems from './LoggedOutNavbarItems';
import LoggedInNavbarItems from './LoggedInNavbarItems';
import useAuth from '../../../hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const { user, setUser } = useAuth();

  const logOut = () => {
    setUser(null);
    window.localStorage.removeItem('login-auth');
  };

  const renderNavbarItems = (data) => {
    if (data) {
      return <LoggedInNavbarItems user={data} logOut={logOut} />;
    }
    return <LoggedOutNavbarItems />;
  };

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
      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.logo_container}>
            <a className={styles.logo_link} href="/">
              <img className={styles.logo_img} src={Logo} alt="dh-logo" />
            </a>
          </div>
          {renderNavbarItems(user)}
        </div>
      </header>
    </>
  );
}

export default Navbar;
