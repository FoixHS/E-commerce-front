import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import createUser from '../../../services/auth';

function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await createUser(data);
    console.log(response);
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
          <input {...register('firstName')} placeholder="Nombre" type="text" />
        </div>
        <div className={styles.group_form}>
          <input {...register('lastName')} placeholder="Apellido" type="text" />
        </div>
        <div className={styles.group_form}>
          <input {...register('email')} placeholder="Email" type="email" />
        </div>
        <div className={styles.group_form}>
          <input {...register('password')} placeholder="Contraseña" type="password" />
        </div>
        <button type="submit" className={styles.button}>Registrarse</button>
      </form>
    </section>
  );
}

export default Register;
