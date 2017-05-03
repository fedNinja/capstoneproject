export const DAY_PLUS = 'DAY_PLUS';
export const DAY_MINUS = 'DAY_MINUS';

export const dayPlus = () => (dispatch, getState) => {
  const { day } = getState().dayCarousel;
  if (day === 6) {
    return dispatch({
      type: DAY_PLUS,
      day: 0,
    });
  }
  return dispatch({
    type: DAY_PLUS,
    day: day + 1,
  });
};

export const dayMinus = () => (dispatch, getState) => {
  const { day } = getState().dayCarousel;
  if (day === 0) {
    return dispatch({
      type: DAY_MINUS,
      day: 6,
    });
  }
  return dispatch({
    type: DAY_MINUS,
    day: day - 1,
  });
};
