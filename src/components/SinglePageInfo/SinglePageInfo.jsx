import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMovie from '../../redux/actions/getSingleMovie';
import Loader from '../Loader';
import SinglePageInfoDump from './SinglePageInfo.dump.jsx';

class SinglePageInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  /*
  the logic is: 

  method "fetched" = turn on the preloader box after click on any film card

  it takes min 500 ms to be shown

  after, preloader will be swithsed off if we get response from api

  otherwise - it will be shown again for 500 ms. 

  and it will happen each time since response will be done 
  */

  fetched(prev, curr) {
    this.setState({isLoaded: true});
    if (prev === curr) {
      this.setState({isLoaded: false});
      return;
    } else {
      setTimeout(() => {
        this.fetched(parseInt(this.props.singleMovie.movie.id,10), parseInt(this.props.match.params.id,10));
      }, 500);
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetched(parseInt(this.props.singleMovie.movie.id,10), parseInt(this.props.match.params.id,10));
    this.props.fetchMovie(id);
  }

  componentWillReceiveProps({ location, match }) {
    if (/film/.test(location.pathname)) {
      if (location.pathname === this.props.location.pathname) {
        return;
      }
      const { id } = match.params;
      this.fetched(parseInt(this.props.singleMovie.movie.id,10), parseInt(id, 10));
      this.props.fetchMovie(id);
    }
  }


  render() {
    let { movie } = this.props.singleMovie;
    return (
      <React.Fragment>
        {this.state.isLoaded && movie
          ? <Loader />
          : <SinglePageInfoDump movie={movie} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ singleMovie }) => ({
  singleMovie
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchMovie,
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(SinglePageInfo);
