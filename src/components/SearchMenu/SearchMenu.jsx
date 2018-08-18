import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../../components/Input';
import styles from './SearchMenu.scss';
import fetchMovies from '../../redux/actions/fetchMovies';

const cx = classNames.bind(styles);

class SearchMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: 'title',
    };
  }

  switchCondition(condition) {
    this.setState({ condition });
  }

  fetchMoviesHandler() {
    this.props.fetchMovies(this.state.condition, this.props.searchValue);
  }

  render() {
    let { condition } = this.state;
    return (
      <div>
        <span className={cx(styles.searchInfo, styles.searchInfoHeader)}>find your movie</span>
        <Input type="text" />
        <div className={styles.menuControls}>
          <span className={cx(styles.searchInfo, styles.searchInfoDiscriber)}>search by</span>
          <button
            onClick={()=>this.switchCondition('title')}
            className={cx(styles.button, condition === 'title' ? styles.buttonActive : null)}
          >
            title
          </button>
          <button
            onClick={()=>this.switchCondition('genres')}
            className={cx(styles.button, condition === 'genres' ? styles.buttonActive : null)}
          >
            genere
          </button>
          <button
            onClick={()=>this.fetchMoviesHandler()}
            className={cx(styles.button, styles.buttonSearch)}
          >
            search
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ searchValue }) => {
  return {
    searchValue,
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchMovies,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);
