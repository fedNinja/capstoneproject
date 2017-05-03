import { combineReducers } from 'redux';

import user from './user';
import chores from './addChoresReducer';
import kid from './addKid';
import dayCarousel from './dayCarousel';

export default combineReducers({
  user,
  chores,
  kid,
  dayCarousel,
});
