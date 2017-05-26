import { combineReducers } from "redux";
import articles from "./containers/ArticleListView/reducers";

const reducers = combineReducers({
  articles
});

export default reducers;