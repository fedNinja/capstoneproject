import axios from 'axios';
import { browserHistory } from 'react-router';

export function login(args) {
  return dispatch => {
    dispatch({ type: 'LOGIN' })
    return axios.post('/api/user/login', args)
      .then((res) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        browserHistory.push('/addchores');
      }
      )
      .catch((err) => dispatch({ type: 'LOGIN_ERROR', payload: err }))
  }
}
export function signup(args) {
  return dispatch => {
    dispatch({ type: 'SIGNUP' })
    return axios.post('/api/user/signup', args)
      .then((res) => {
        dispatch({ type: 'SIGNUP_SUCCESS', payload: res.data });
        browserHistory.push('/addchores');
      }
      )
      .catch((err) => dispatch({ type: 'SIGNUP_ERROR', payload: err }))
  }
}
