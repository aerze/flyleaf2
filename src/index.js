import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// rename to root reducers, move to root dir
import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(combineReducers({
  ...reducers,
  routing: routerReducer
}));

const history = syncHistoryWithStore(browserHistory, store)

const Application = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);


ReactDOM.render(
  Application,
  document.getElementById('root')
);
