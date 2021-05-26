  
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const INITIAL_STORE = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  INITIAL_STORE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
