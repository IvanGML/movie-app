import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';

const ifSinglePage = false;

const cx = classNames.bind(styles);

const Header = props => (
  <header>

    <div className={styles.wrapper}>
      <div className={styles.wrapperHeader}>
        <h1>
          <NavLink to="/">kinopoisk-2</NavLink>
        </h1>
        {ifSinglePage && <NavLink to="/" className={cx(styles.button, styles.buttonSearchSingleMovie)}>search</NavLink>}
      </div>
      {props.children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
