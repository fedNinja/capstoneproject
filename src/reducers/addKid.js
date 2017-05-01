import {
  ADD,
  ADD_SUCCESS,
  ADD_ERROR
} from '../actions/addkid';

const initialState = {
  info: {},
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        info: action.payload
      };
    case ADD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
