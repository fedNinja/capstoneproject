import axios from 'axios';
import {browserHistory} from 'react-router';

/**
|--------------------------------------------------
| Types
|--------------------------------------------------
*/

export const ADD = 'ADD';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';

/**
|--------------------------------------------------
| Actions
|--------------------------------------------------
*/

export function addkid(args) {
  return dispatch => {
    dispatch({ type: ADD });
    return axios
      .post('/kids', args)
      .then(res => {
        dispatch({ type: ADD_SUCCESS, payload: res.data });
        browserHistory.push('/home');
      })
      .catch(err => dispatch({ type: ADD_ERROR, payload: err }));
  };
}
