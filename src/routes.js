import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LandingPage from './components/LandingPage';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import AddChoresPage from './pages/chores';
import HomePage from './pages/home';
import AddKidPage from './pages/kid';
import ApproveRejectPage from './pages/approve';
import CompleteChoresPage from './pages/completechores';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/addchores(/:childId)" component={AddChoresPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/addkid" component={AddKidPage} />
    <Route path="/approve" component={ApproveRejectPage} />
    <Route path="/completechore" component={CompleteChoresPage}  />
  </Route>
);
