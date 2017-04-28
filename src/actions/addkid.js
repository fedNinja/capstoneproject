import axios from 'axios';
import {browserHistory} from 'react-router';
import { Child } from '../utils/childapi';
import { Chore } from '../utils/choreapi';

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

/*export function addkid(args) {
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
}*/

/* replaced above fn with below fn */
export function addkid(args) {
  return async dispatch => {
    try {
      const data = await Child.addChild(args);
      const chores = await Chore.getChores();
//      const kids = await Child.getChildren(data.user.id);
      await dispatch({ type: ADD_SUCCESS, payload: data });
      browserHistory.push('/home');
    } catch (e) {
      dispatch({ type: ADD_ERROR, payload: e });
    }
  };
}
