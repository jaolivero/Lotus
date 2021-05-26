import {CHANGE_QUERY} from '../actions/types'
import post from "../mock/Posts";

const INITIAL_STORE = {
  list: [],
  query: "",
  loading: false,
  errors: {}
}

export default (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case CHANGE_QUERY:
      return {
        ...store,
        query: action.payload.query,
        list: action.payload.newList
      }
    default: 
      return store;
  }
}