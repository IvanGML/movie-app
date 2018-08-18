import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import fetchMovies from '../../redux/actions/fetchMovies';
import styles from './ResultList.scss';
import ErrorBoundary from '../ErrorBoundary';
import NoResult from '../NoResult';
import MovieCard from '../MovieCard';


class ResultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchMovies();
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
      <div className={styles.resultList}>
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
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.shape({
    data: PropTypes.array,
    total: PropTypes.number,
    offset: PropTypes.number,
    limit: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);

