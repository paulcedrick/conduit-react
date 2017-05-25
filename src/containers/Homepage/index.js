import React, { Component } from "react";
import Banner from "../../components/Banner/";
import ArticleListView from "../ArticleListView/";
import Sidebar from "../Sidebar/";

class Homepage extends Component {
  render() {
    return (
      <div className="home-page">
        <Banner>A place to share your knowledge.</Banner>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <ArticleListView />
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
