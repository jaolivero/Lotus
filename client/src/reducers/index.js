import { combineReducers } from "redux";
import alert from './alert';
import auth from  './auth';
import postsReducer from "./postsReducer";
import newPostReducer from "./newPostReducer";
import searchReducer from './searchReducer'

export default combineReducers({
  alert,
  auth,
  posts: postsReducer,
  newPost: newPostReducer,
  search: searchReducer
});

const store = {
  resources: {
    list: [],
    loading: true,
    errors: {},
    count: 0
  },
  newPost: {
    form: {
      id: 0,
      game: "",
      likes: "",
      summary: "",
      categories: "",
      summary: "",
      link: "",
      datePublished: "",
      comments: [],
    },
    loading: false,
    errors: {},
  },
  search: {
    list: [],
    query: '',
    loading: false,
    errors: {}
  }
}
