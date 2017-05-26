import {
  receiveArticleList,
  requestArticleList,
  requestArticleListFail,
  FETCH_ARTICLE,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAIL
} from "./actions";

describe("requestArticleList function", () => {
  it("should return type:FETCH_ARTICLE object", () => {
    const state = requestArticleList();
    const expectedState = { type: FETCH_ARTICLE };

    expect(state).toEqual(expectedState);
  });
});

describe("receiveArticleList function", () => {
  it("should return type:FETCH_ARTICLE_LIST_SUCCESS object", () => {
    const state = receiveArticleList([]);
    const expectedState = { type: FETCH_ARTICLE_SUCCESS, articleList: [] };

    expect(state).toEqual(expectedState);
  });
});

describe("requestArticleListFail function", () => {
  it("should retur type:FETCH_ARTICLE_FAIL object", () => {
    const state = requestArticleListFail();
    const expectedState = { type: FETCH_ARTICLE_FAIL };

    expect(state).toEqual(expectedState);
  });
});
