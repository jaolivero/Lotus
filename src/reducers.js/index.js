import { combineReducers } from "redux";
import postsReducer from "./postReducer";
import newPostReducer from "./newPostReducer";

export default combineReducers({
  posts: postsReducer,
  newResource: newPostReducer,
});
