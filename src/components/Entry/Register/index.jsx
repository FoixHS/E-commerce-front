import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import styles from './Register.module.scss';
import { createUser } from '../../../services/auth';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();
  const onSubmit = async (data) => {
    const response = await createUser(data);
    if (response.status === 200) history.push('/login');
  };
  return (
    <section className={styles.register_container}>
      <div className={styles.welcome}>
        <h3 className={styles.welcome_title}>¡Hola!</h3>
        <p className={styles.welcome_text}>
          Registrate para disfrutar de nuestros beneficios y promociones.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.register_form}>
        <div className={styles.group_form}>
          <input {...register('firstName', { required: true })} placeholder="Nombre" type="text" />
          <span className={styles.errors}>{errors.firstName?.type === 'required' && 'El campo nombre es requerido'}</span>
        </div>
        <div className={styles.group_form}>
          <input {...register('lastName', { required: true })} placeholder="Apellido" type="text" />
          <span className={styles.errors}>{errors.lastName?.type === 'required' && 'El campo apellido es requerido'}</span>
        </div>
        <div className={styles.group_form}>
          <input {...register('email', { required: true })} placeholder="Email" type="email" />
          <span className={styles.errors}>{errors.email?.type === 'required' && 'El campo email es requerido'}</span>
        </div>
        <div className={styles.group_form}>
          <input {...register('password', { required: true })} placeholder="Contraseña" type="password" />
          <span className={styles.errors}>{errors.password?.type === 'required' && 'El campo contraseña es requerido'}</span>
        </div>
        <button type="submit" className={styles.button}>Registrarse</button>
      </form>
    </section>
  );
}

export default Register;
