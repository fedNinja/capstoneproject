import { combineReducers } from 'redux';

import user from './user';
import chores from './chores';
import chore from './chores';
import kid from './addKid';
import dayCarousel from './dayCarousel';
import children from './children';

export default combineReducers({
  user,
  chores,
  chore,
  kid,
  dayCarousel,
  children
});
