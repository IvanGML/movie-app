import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Favicon from 'react-favicon';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SinglePageInfo from '../../components/SinglePageInfo';
import SearchMenu from '../../components/SearchMenu';
import styles from './SearchPage.scss';
import Header from '../Header';
import Controls from '../Controls';
import ResultList from '../ResultList';
import NoResult from '../NoResult';
import Footer from '../Footer';

class SearchPage extends Component {
  render() {
    let results = this.props.movies.movies.data ? this.props.movies.movies.data.length > 0 : false;
    return (
      <HashRouter>
        <Fragment>
        <Favicon url="https://vk.com/doc20775422_473444080?hash=857a414e8d39ecc880&dl=6cc190cdaac80c9968" />
          <Header>
            <Switch>
              <Route path="/film/:id" component={SinglePageInfo} />
              <Route path="/" component={SearchMenu} />
              <Route component={SearchMenu} />
            </Switch>
          </Header>
          <main>
            <div className={styles.wrapper}>
              <Controls />
              {true ? <ResultList /> : <NoResult />}
            </div>
          </main>
          <Footer />
        </Fragment>
      </HashRouter>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
});

export default connect(mapStateToProps)(SearchPage);
