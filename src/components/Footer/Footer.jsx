import React from 'react';
import styles from './Footer.scss';

const Footer = () => (
  <footer>
    <div className={styles.wrapper}>
      <span className={styles.footerInfo}>
        <a href="/">kinopoisk-2</a>
      </span>
    </div>
  </footer>
);

export default Footer;
