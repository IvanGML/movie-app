import React from 'react';
import styles from './Loader.scss';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper} key='loader'>
      <div className={styles.loader}>

      </div>
    </div>
  );
};

export default Loader;