import React from 'react';
import { BsEmojiDizzy } from 'react-icons/bs';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon_container}>
          <BsEmojiDizzy />
        </div>
        <span className={styles.message}>
          404 Page Not Found
        </span>
      </div>
    </section>
  );
}

export default NotFound;
