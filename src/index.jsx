import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import SearchPage from './components/SearchPage';
import './assets/styles/index.scss';

hydrate(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <SearchPage />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('app')
);
