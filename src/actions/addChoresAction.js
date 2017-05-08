import axios from 'axios';

export const RECIEVE_DATA = 'RECIEVE_DATA';
const RecieveData = chores => {
  return {
    type: RECIEVE_DATA,
    chores,
  };
};

export function addChoresRequest(category) {
  return dispatch => {
    return axios
      .get('/chorecategory/' + category)
      .then(res => {
        dispatch({ type: category, payload: res.data });
      })
      .catch(err => dispatch({ type: 'CHORES_ERROR', payload: err }));
  };
}

export function assignChoreRequest(childId, chore) {
  return dispatch => {
    return axios
      .patch('/assignChores/' + childId, chore)
      .then(res => {
        dispatch(RecieveData(res.data));
      })
      .catch(err => dispatch({ type: 'CHORES_ERROR', payload: err }));
  };
}
