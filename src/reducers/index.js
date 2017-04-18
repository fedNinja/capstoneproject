import { combineReducers } from 'redux';

import logIn from './user';
import chores from './addChoresReducer';

export default combineReducers({
  logIn,
  chores
})
