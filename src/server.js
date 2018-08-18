import express from 'express';
import cors from 'cors';
import path from 'path';
import ejs from 'ejs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ServerRouter } from 'react-router-dom';
import SearchPage from './components/SearchPage';

import movies from './redux/reducers/getMovies';
import singleMoovie from './redux/reducers/getSingleMovie';
import searchValue from './redux/reducers/getSearchValue';

require('dotenv').config();

const app = express();

app.engine('ejs', ejs.__express); // eslint-disable-line
app.set('view engine', 'ejs');
app.set('views', path.join('dist'));
app.use(cors());

app.use('/static', express.static('dist'));
app.get('*', (req, res) => {
  const reducers = combineReducers({
    movies,
    singleMoovie,
    searchValue,
  });

  const store = createStore(reducers);
  const html = ReactDOMServer.renderToString(<Provider store={store}><ServerRouter context={{}}><SearchPage /></ServerRouter></Provider>);
  const preloadedState = store.getState();
  res.render('index', { html, preloadedState });
});

process.on('uncaughtException', (err) => {
  console.log(err);
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server is running on port 3000');
});