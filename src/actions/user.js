import axios from 'axios';
import { browserHistory } from 'react-router';

import { User } from '../utils/api';
import setAuthToken from '../utils/setAuthToken';

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
export const userid = 'userid';
export const username = 'username';
export const token = 'token';
export const email = 'email';

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
      const data = await User.login(args);
			localStorage.setItem(userid, data.user.id);
      localStorage.setItem(username, data.user.userName);
      localStorage.setItem(email, data.user.email);
      localStorage.setItem(token, data.token);
      setAuthToken(data.token);
      //console.log(jwt.decode(data.token));
      await dispatch(loginSuccess(data));
      browserHistory.push('/home');
    } catch (e) {
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
