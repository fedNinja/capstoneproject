import { DAY_PLUS, DAY_MINUS } from '../actions/dayCarousel';

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const initialState = {
  day: 0,
  weekDays,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DAY_PLUS: {
      return {
        ...state,
        day: action.day,
      };
    }
    case DAY_MINUS: {
      return {
        ...state,
        day: action.day,
      };
    }
    default:
      return state;
  }
}
