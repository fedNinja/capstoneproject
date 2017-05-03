import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from '../actions/user';

const initialState = {
  isLogged: false,
  info: {},
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        info: action.payload,
      };
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
