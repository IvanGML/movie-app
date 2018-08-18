import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SinglePageInfo from '../../components/SinglePageInfo';
import SearchMenu from '../../components/SearchMenu';
import styles from './SearchPage.scss';
import Header from '../Header';
import Controls from '../Controls';
import ResultList from '../ResultList';
import NoResult from '../NoResult';
import Footer from '../Footer';

const results = true;

const SearchPage = () => (
  <BrowserRouter>
    <Fragment>
      <Header>
        <Switch>
          <Route path="/film/:id" component={SinglePageInfo} />
          <Route path="/" component={SearchMenu} />
        </Switch>
      </Header>
      <main>
        <div className={styles.wrapper}>
          <Controls />
          {results ? <ResultList /> : <NoResult />}
        </div>
      </main>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default SearchPage;
