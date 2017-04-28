import axios from 'axios';
import { browserHistory } from 'react-router';

import { Child } from '../utils/childapi';

export const APPROVE_SUCCESS = 'APPROVE_SUCCESS';
export const APPROVE_ERROR = 'APPROVE_ERROR';

function approveSuccess(payload) {
  return {
    type: APPROVE_SUCCESS,
    payload,
  };
}

function approveError(payload) {
  return {
    type: APPROVE_ERROR,
    payload,
  };
}

export function approveChores(args) {
  console.log(args);
  return async dispatch => {
    try {
      const data = await Child.approveChores(args);
      console.log(data);
      await dispatch(approveSuccess(data));
      browserHistory.push('/home');
    } catch (e) {
      dispatch(approveError(e));
    }
  };
}
