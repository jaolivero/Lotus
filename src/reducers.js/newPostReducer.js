const INITIAL_STORE = {
  form: {
    id: 0,
    title: "",
    summary: "",
    game: "",
    video: "",
    likes: 0,
    comments: [],
  },
  loading: false,
  errors: {},
};

export default (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case "CHANGE_FORM":
      return {
        ...store,
        form: {
          ...store.form,
          [action.payload.field]: action.payload.value,
        },
      };
    case "SUBMIT_FORM":
      return { ...INITIAL_STORE };
    default:
      return store;
  }
};
