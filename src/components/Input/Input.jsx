import React from 'react';
import styles from './Input.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import setNewMoviesList from '../../redux/actions/setNewMoviesList';
import fetchMovies from '../../redux/actions/fetchMovies';
import getSearchValue from '../../redux/actions/getSearchValue';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: '' };
  }

  setValue = (e) => {
    const inputText = e.target.value;
    const result = this.props.movies.data.filter((item) => {
      const currentItem = item.title.toLowerCase();
      return currentItem.includes(inputText.toLowerCase());
    });
    this.setState({ inputText },()=>this.props.setNewMoviesList(result));
    this.props.getSearchValue(inputText);
  }

  render() {
    return (
      <input type="text" 
             value={this.state.inputText} 
             onChange={this.setValue}
             className={styles.inputStyles} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state ? state.movies.moviesAll : {},
    searchFlag: state.searchFlag,
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setNewMoviesList,
    fetchMovies,
    getSearchValue,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Input);
