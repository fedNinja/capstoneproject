import { CHORE_COMPLETED_SUCCESS, CHORE_COMPLETED_ERROR } from '../actions/completeChoreAction';

const initialState = {
  chore: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHORE_COMPLETED_SUCCESS: {
      return {
        ...state,
        chore: action.chore,
      };
    }
    case CHORE_COMPLETED_ERROR: {
      return {
        ...state,
        chore: action.chore,
      };
    }
    default:
      return state;
  }
}
