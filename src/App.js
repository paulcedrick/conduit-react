import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Header from "./containers/Header/";
import Footer from "./containers/Footer/";
import Homepage from "./containers/Homepage/";
import reducers from "./reducers";
import articlesSaga from "./containers/ArticleListView/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(articlesSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Homepage} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
