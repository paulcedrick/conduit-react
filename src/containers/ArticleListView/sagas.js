import { call, takeLatest, put } from "redux-saga/effects";
import {
  FETCH_ARTICLE_FAIL,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE,
} from "./actions";
import Api from "../../agent";

function* fetchArticles(action) {
  try {
    const articles = yield call(Api.Articles.all);
    yield put({type: FETCH_ARTICLE_SUCCESS, articleList: articles})
  } catch (e) {
    yield put({type: FETCH_ARTICLE_FAIL});
  }
}

function* articlesSaga() {
    yield takeLatest(FETCH_ARTICLE, fetchArticles);
}

export default articlesSaga;