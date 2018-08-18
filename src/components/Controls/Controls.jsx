import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import styles from './Controls.scss';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import setNewMoviesList from '../../redux/actions/setNewMoviesList';

const cx = classNames.bind(styles);

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderInAsc: true,
      currentSortButton: 0
    };
  }

  sortBy = (trigger) => {
    let orderWay = this.state.orderInAsc ? ['asc'] : ['desc'];
    const result = _.orderBy(this.props.movies.data, [trigger], orderWay);
    this.props.setNewMoviesList(result);
    this.setState({
      orderInAsc: !this.state.orderInAsc,
      currentSortButton: trigger === 'release_date' ? 0 : 1,
    });
  }

  render() {
    const amountOfMovies = this.props.movies.data ? this.props.movies.data : [];
    const { currentSortButton } = this.state;
    return (
      <div className={styles.resultControls}>
        <span className={styles.founded}>{amountOfMovies.length} movies found</span>
        <div className={styles.resultControlsWrapper}>
          <span>Sort by</span>
          <button onClick={()=> this.sortBy('release_date')} className={cx(styles.sortByButton, currentSortButton ? null : styles.active)}>release date</button>
          <button onClick={()=> this.sortBy('vote_average')} className={cx(styles.sortByButton, currentSortButton ? styles.active : null)}>rating</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({movies}) => ({
  movies: movies.movies,
  moviesAll: movies.moviesAll,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setNewMoviesList,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
