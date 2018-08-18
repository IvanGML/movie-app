import React from 'react';
import styles from './NoResult.scss';

const NoResult = () => (
  <div className={styles.noAnyResultContainer}>
    <em className={styles.noAnyResult}>no films found</em>
    <a className={styles.newSearch} href="/">new search</a>
  </div>
);

export default NoResult;
