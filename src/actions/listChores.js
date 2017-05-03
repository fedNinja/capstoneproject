import axios from 'axios';

export const CHORE_SUCCESS = 'CHORE_SUCCESS';
export const CHORE_ERROR = 'CHORE_ERROR';

export const getChore = choreName => async dispatch => {
  let chore;
  try {
    const chores = await axios.get('/chores');
    chores.map(item => { // eslint-disable-line
      if (item.choreName === choreName) return (chore = item);
    });
    return dispatch({
      type: CHORE_SUCCESS,
      chore
    });
  } catch (e) {
    return dispatch({
      type: CHORE_ERROR,
      e
    });
  }
};
