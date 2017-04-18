import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore,  applyMiddleware } from 'redux';
import axios from 'axios';
import reducer from './reducers';
import routes from './routes';

const middleware = applyMiddleware(promise(), thunk, createLogger());

axios.defaults.baseURL = 'http://localhost:8080';

export const store = createStore(
  reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),middleware
);

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('root')
)
