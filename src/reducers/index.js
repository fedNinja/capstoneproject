import { combineReducers } from 'redux';

import user from './user';
import chores from './addChoresReducer';

export default combineReducers({
  user,
  chores,
});
