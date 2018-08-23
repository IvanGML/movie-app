import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './MovieCard.scss';
import { returnYear } from '../../utils/helpers';

const MovieCard = (props) => {
  let path = `/film/${props.info.id}`;
  return (
    <div className={styles.movie__item}>
      <div className={styles.movie}>
        <NavLink to={path} className={styles.movieLinkImg}>
          <img src={props.info.poster_path} alt={props.info.title} />
        </NavLink>
        <div className={styles.movieDiscription}>
          <div className={styles.movieTitle}>
            <NavLink to={path}>
              <h2 className={styles.movieHeader}>
                {props.info.title}
              </h2>
            </NavLink>
            <span className={styles.movieDate}>{returnYear(props.info.release_date)}</span>
          </div>
          <span className={styles.movieGanre}>{props.info.genres[0]}</span>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    id: PropTypes.number,
    genres: PropTypes.array,
  }).isRequired,
};

export default MovieCard;
