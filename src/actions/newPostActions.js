export const changeForm = (field, value) => (dispatch) => {
  dispatch({
    type: "CHANGE_FORM",
    payload: {
      field,
      value,
    },
  });
};

export const submitForm = (data) => (dispatch) => {
  dispatch({
    type: "SUBMIT_FORM",
  });
};
