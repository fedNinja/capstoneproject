import { combineReducers } from 'redux';

import user from './user';
import chores from './addChoresReducer';
import kid from './addKid';

export default combineReducers({
  user,
  chores,
  kid
});
