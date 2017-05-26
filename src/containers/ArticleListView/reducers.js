import {
  FETCH_ARTICLE,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAIL,
  SET_VISIBILITY_FILTER,
  VISIBLITY_FILTER
} from "./actions";
import { combineReducers } from "redux";

const articleListInitState = {
  isLoading: false,
  items: []
};

const { MY_FEED, ALL_FEED } = VISIBLITY_FILTER;

export const articleList = (state = articleListInitState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE:
      return Object.assign({}, state, {
        isLoading: true
      });

    case FETCH_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        items: action.articleList
      });

    case FETCH_ARTICLE_FAIL:
      return Object.assign({}, state, {
        isLoading: false
      });

    default:
      return state;
  }
};

export const visibilityFilter = (state = MY_FEED, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
};

const articles = combineReducers({
  articleList,
  visibilityFilter
});

export default articles;