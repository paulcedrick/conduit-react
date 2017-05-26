// Constants
export const FETCH_ARTICLE = "FETCH_ARTICLE";
export const FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS";
export const FETCH_ARTICLE_FAIL = "FETCH_ARTICLE_FAIL";
export const SET_VISIBILITY_FILTER = "SET_VISIBLITY_FILTER";

export const VISIBLITY_FILTER = {
  MY_FEED: "MY_FEED",
  ALL_FEED: "ALL_FEED"
};

// Action Creators
export const requestArticleList = () => ({
  type: FETCH_ARTICLE
});
export const receiveArticleList = articleList => ({
  type: FETCH_ARTICLE_SUCCESS,
  articleList
});
export const requestArticleListFail = () => ({
  type: FETCH_ARTICLE_FAIL
});
