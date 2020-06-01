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
    default:
      return store;
  }
};
