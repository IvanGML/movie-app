import React from 'react';
import styles from './NoResult.scss';
// import { NavLink } from 'react-router-dom';

const NoResult = () => (
  <div className={styles.noAnyResultContainer}>
    <em className={styles.noAnyResult}>no films found</em>
    {/* <NavLink className={styles.newSearch} to="/">new search</NavLink> */}
  </div>
);

export default NoResult;
