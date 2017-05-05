import axios from 'axios';
import { browserHistory } from 'react-router';

import { Child } from '../utils/childapi';

export const CHORE_COMPLETED_SUCCESS = 'CHORE_COMPLETED_SUCCESS';
export const CHORE_COMPLETED_ERROR = 'CHORE_COMPLETED_ERROR';

function choreSuccess(payload) {
  return {
    type: CHORE_COMPLETED_SUCCESS,
    payload,
  };
}

function choreError(payload) {
  return {
    type: CHORE_COMPLETED_ERROR,
    payload,
  };
}

export function completeChoresRequest(args) {
  console.log(args);
  return async dispatch => {
    try {
      const data = await Child.completeChoresRequest(args);
      console.log(data);
      await dispatch(choreSuccess(data));
      browserHistory.push('/home');
    } catch (e) {
      dispatch(choreError(e));
    }
  };
}
