import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import AddChoresPage from './pages/chores';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/addchores" component={AddChoresPage} />
  </Route>
);
