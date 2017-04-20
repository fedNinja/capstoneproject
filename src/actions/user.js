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
  console.log(`inside login action ${JSON.stringify(args)}`);
  return async dispatch => {
    try {
      console.log("Inside try block");
      const data = await User.login(args);
      console.log(data);
      await dispatch(loginSuccess(data));
      browserHistory.push('/addchores');
    } catch (e) {
      console.log("error");
      dispatch(loginError(e));
    }
  };
}


/*export function login(args) {
  console.log("inside login action");
  return dispatch => {
    dispatch({ type: LOGIN });
    return axios.post('/api/user/login', args)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        browserHistory.push('/addchores');
      }
      )
      .catch((err) => dispatch({ type: LOGIN_ERROR, payload: err }))
  }
}*/

export function signup(args) {
  return dispatch => {
    dispatch({ type: SIGNUP });
    return axios
      .post('/user/signup', args)
      .then(res => {
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        browserHistory.push('/');
      })
      .catch(err => dispatch({ type: SIGNUP_ERROR, payload: err }));
  };
}
