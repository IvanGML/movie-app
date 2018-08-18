import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './SinglePageInfo.scss';
import fetchMovie from '../../redux/actions/getSingleMovie';


class SinglePageInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match, dispatch } = this.props;
    const { id } = match.params;
    dispatch(fetchMovie(id));
  }

  componentWillReceiveProps({ location, dispatch, match }) {
    if (/film/.test(location.pathname)) {
      if (location.pathname === this.props.location.pathname) {
        return;
      }
      const nextId = match.params.id;
      dispatch(fetchMovie(nextId));
    }
  }

  render() {
    let { moovie } = this.props.singleMoovie;
    console.log('moovie', this.props);
    return (
      <div className={styles.movieDiscriptionWrapper}>
        <img src={moovie.poster_path} alt={moovie.title} />
        <div className={styles.movieInfo}>
          <div className={styles.ratingAndNameWrapper}>
            <h2>{moovie.title}</h2>
            <span className={styles.rating}>{moovie.vote_average}</span>
          </div>
          <div className={styles.yearDurationWrapper}>
            <span className={styles.year}>{moovie.release_date}</span>
            <span className={styles.duration}>{moovie.runtime}</span>
          </div>
          {moovie.overview}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ singleMoovie }) => ({
  singleMoovie,
});

export default connect(mapStateToProps)(SinglePageInfo);
