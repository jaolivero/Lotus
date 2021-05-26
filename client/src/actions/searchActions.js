import {CHANGE_QUERY} from './types'

export const changeQuery = (query, list) => (dispatch) => {
  const newList = list.filter(
    (post) => {
      const index = post.title.toLowerCase().indexOf(query.toLowerCase());
      if (index >= 0) {
        return true;
      }
      return false;
    }
  );

  dispatch({
    type: CHANGE_QUERY,
    payload: {
      query,
      newList
    }
  })
}