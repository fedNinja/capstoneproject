import axios from 'axios';
import { browserHistory } from 'react-router';

import { Child } from '../utils/childapi';

export const CHORE_SUCCESS = 'CHORE_SUCCESS';
export const CHORE_ERROR = 'CHORE_ERROR';

function choreSuccess(payload) {
  return {
    type: CHORE_SUCCESS,
    payload,
  };
}

function choreError(payload) {
  return {
    type: CHORE_ERROR,
    payload,
  };
}

export function completeChores(args) {
  console.log(args);
  return async dispatch => {
    try {
      const data = await Child.completeChores(args);
      console.log(data);
      await dispatch(choreSuccess(data));
      browserHistory.push('/home');
    } catch (e) {
      dispatch(choreError(e));
    }
  };
}
