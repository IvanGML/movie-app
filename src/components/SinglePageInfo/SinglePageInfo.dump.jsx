import React from 'react';
import styles from './SinglePageInfo.scss';

const SinglePageInfoDump = ({movie}) => {
    return (
        <div className={styles.movieDiscriptionWrapper} key='movie'>
            <img src={movie.poster_path} alt={movie.title} />
            <div className={styles.movieInfo}>
                <div className={styles.ratingAndNameWrapper}>
                    <h2>{movie.title}</h2>
                    <span className={styles.rating}>{movie.vote_average}</span>
                </div>
                <div className={styles.yearDurationWrapper}>
                    <span className={styles.year}>{movie.release_date}</span>
                    <span className={styles.duration}>{movie.runtime}</span>
                </div>
                {movie.overview}
            </div>
        </div>
    );
};

export default SinglePageInfoDump;