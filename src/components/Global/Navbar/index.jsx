import React, { useContext, useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import Logo from '../../../assets/images/logo/logo.svg';
import LoggedOutNavbarItems from './LoggedOutNavbarItems';
import LoggedInNavbarItems from './LoggedInNavbarItems';
import UserContext from '../../../helpers/UserContext';
import { getUser } from '../../../services/auth';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const renderUser = async () => {
      if (!user && window.localStorage.getItem('login-auth')) {
        const token = window.localStorage.getItem('login-auth');
        const userResponse = await getUser(JSON.parse(token));
        setUser(userResponse.data);
        setLoading(false);
      }
      setLoading(false);
    };
    renderUser();
  }, [user, setUser]);

  const renderNavbarItems = (data) => {
    if (data) {
      return <LoggedInNavbarItems />;
    }
    return <LoggedOutNavbarItems />;
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.logo_container}>
          <a className={styles.logo_link} href="/">
            <img className={styles.logo_img} src={Logo} alt="dh-logo" />
          </a>
        </div>
        {loading ? null : renderNavbarItems(user)}
      </div>
    </header>
  );
}

export default Navbar;
