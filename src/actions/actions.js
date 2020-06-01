export const increment = (count) => (dispatch) => {
  dispatch({
    type: "INCREMENT",
    payload: count + 1,
  });
};
