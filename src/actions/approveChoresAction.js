
import { browserHistory } from 'react-router';

import { Chore } from '../utils/choreapi';

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

export function approveChoresRequest(args) {
  return async dispatch => {
    try {
      const chore = await Chore.getChoreById(args.choreId);
      await dispatch(approveSuccess(chore));
      //browserHistory.push('/home');
    } catch (e) {
      dispatch(approveError(e));
    }
  };
}
