import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styles from './Login.module.scss';
import { login, getUser } from '../../../services/auth';
import useAuth from '../../../hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setUser } = useAuth();
  const history = useHistory();

  const getUserInfo = async (token) => {
    const userResponse = await getUser(token);
    if (userResponse.status === 200) {
      setUser(userResponse.data);
    }
  };

  const onSubmit = async (data) => {
    const response = await login(data);
    if (response.status === 200) {
      getUserInfo(response.data.token);
      window.localStorage.setItem('login-auth', JSON.stringify(response.data.token));
      history.push('/');
    }
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
      <section className={styles.login_container}>
        <div className={styles.welcome}>
          <h3 className={styles.welcome_title}>¡Me alegro de verte!</h3>
          <p className={styles.welcome_text}>
            Espero que encuentres el producto que estás buscando.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
          <div className={styles.group_form}>
            <input placeholder="Email" {...register('email', { required: true })} type="email" />
            <span className={styles.errors}>{errors.email?.type === 'required' && 'El campo email es requerido'}</span>
          </div>
          <div className={styles.group_form}>
            <input placeholder="Constraseña" {...register('password', { required: true })} type="password" />
            <span className={styles.errors}>{errors.password?.type === 'required' && 'El campo email es requerido'}</span>
          </div>
          <button className={styles.button} type="submit">Ingresar</button>
        </form>
      </section>
    </>
  );
}

export default LogIn;
