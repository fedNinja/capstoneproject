import { CHORE_SUCCESS, CHORE_ERROR } from '../actions/listChores';

const initialState = {
  chore: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHORE_SUCCESS: {
      return {
        ...state,
        chore: action.chore,
      };
    }
    case CHORE_ERROR: {
      return {
        ...state,
        chore: action.chore,
      };
    }
    default:
      return state;
  }
}
