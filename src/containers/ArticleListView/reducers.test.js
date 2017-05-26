import { articleList } from "./reducers";
import {
  FETCH_ARTICLE,
  FETCH_ARTICLE_FAIL,
  FETCH_ARTICLE_SUCCESS
} from "./actions";

const articleListInitState = {
  isLoading: false,
  items: []
};

describe("articleList reducer", () => {
  it("should return articleList initial state when there's nothing being passed to articleList", () => {
    const state = articleList(undefined, { type: null });

    expect(state).toEqual(articleListInitState);
  });

  it("should return isLoading: true when action is FETCH_ARTICLE", () => {
    const state = articleList(undefined, { type: FETCH_ARTICLE });
    const expectedState = Object.assign({}, articleListInitState, {
      isLoading: true
    });

    expect(state).toEqual(expectedState);
  });

  it("should return isLoading: false when action is FETCH_ARTICLE_FAIL", () => {
    const state = articleList(undefined, { type: FETCH_ARTICLE_FAIL });
    const expectedState = Object.assign({}, articleListInitState, {
      isLoading: false
    });

    expect(state).toEqual(expectedState);
  });

  it("should return isLoading: false and return items when action is FETCH_ARTICLE_SUCCESS", () => {
    const state = articleList(undefined, {
      type: FETCH_ARTICLE_SUCCESS,
      articleList: []
    });
    const expectedState = Object.assign({}, articleListInitState, {
      isLoading: false,
      items: []
    });

    expect(state).toEqual(expectedState);
  });
});
