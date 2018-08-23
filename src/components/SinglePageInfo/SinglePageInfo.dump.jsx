import React from 'react';
import styles from './SinglePageInfo.scss';
import { NavLink } from 'react-router-dom';
import { minToHours } from '../../utils/helpers';

const SinglePageInfoDump = ({movie}) => {
    console.log(movie);
    return (
        <div className={styles.movieDiscriptionWrapper} key='movie'>
            <img src={movie.poster_path} alt={movie.title} />
            <div className={styles.movieInfo}>
                <div className={styles.ratingAndNameWrapper}>
                    <h2>{movie.title}</h2>
                    <span className={styles.rating}>{movie.vote_average}</span>
                </div>
                <div className={styles.yearDurationWrapper}>
                    <div className={styles.year}>Release date: {movie.release_date}</div>
                    <div className={styles.duration}>Duration: {minToHours(movie.runtime)}</div>
                </div>
                <div className={styles.overview}>
                    {movie.overview}
                </div>
            </div>
            <NavLink to={"/"} className={styles.button}>to home</NavLink>
        </div>
    );
};

export default SinglePageInfoDump;