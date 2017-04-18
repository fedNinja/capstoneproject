import axios from 'axios';
import { browserHistory } from 'react-router';

import { User } from '../utils/api';

/**
|--------------------------------------------------
| Types
|--------------------------------------------------
*/

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

/**
|--------------------------------------------------
| Actions
|--------------------------------------------------
*/

function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

function loginError(payload) {
  return {
    type: LOGIN_ERROR,
    payload,
  };
}

export function login(args) {
  return async dispatch => {
    try {
      const data = await User.login(args);
      await dispatch(loginSuccess(data));
      browserHistory.push('/addchores');
    } catch (e) {
      dispatch(loginError(e));
    }
  };
}

export function signup(args) {
  return dispatch => {
    dispatch({ type: SIGNUP });
    return axios
      .post('/api/user/signup', args)
      .then(res => {
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        browserHistory.push('/addchores');
      })
      .catch(err => dispatch({ type: SIGNUP_ERROR, payload: err }));
  };
}
