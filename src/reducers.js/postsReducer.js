import Posts from "../mock/post";

const INITIAL_STORE = {
  list: [...Posts],
  loading: true,
  errors: {},
  count: 0,
};

export default (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...store,
        count: action.payload,
      };
    default:
      return store;
  }
};
