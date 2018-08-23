import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './ResultList.scss';
import ErrorBoundary from '../ErrorBoundary';
import NoResult from '../NoResult';
import MovieCard from '../MovieCard';
import fetchMovies from '../../redux/actions/fetchMovies';


class ResultList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies()
  }
  
  render() {
    const moviesArr = this.props.movies.data ? this.props.movies.data : [];
    const listInfo = moviesArr ?
      moviesArr.map(item => (
        <ErrorBoundary key={item.id}>
          <MovieCard info={item} />
        </ErrorBoundary>
      )) : <NoResult />;
    return (
      <div className={styles.movies}>
        {listInfo}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state ? state.movies.movies : {},
  searchFlag: state.searchFlag,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchMovies,
  }, dispatch)
);

ResultList.propTypes = {
  movies: PropTypes.shape({
    data: PropTypes.array,
    total: PropTypes.number,
    offset: PropTypes.number,
    limit: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);

