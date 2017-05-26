import React, { Component } from "react";
import { connect } from "react-redux";
import ArticlePreview from "../../components/ArticlePreview/";
import ToggleFeed from "../ToggleFeed/";
import { requestArticleList } from "./actions";

const mapDispatchToProps = dispatch => {
  return {
    onRequestArticles: () => {
      dispatch(requestArticleList());
    }
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    articleList: state.articles.articleList.items.articles || []
  };
};

class ArticleListView extends Component {
  componentDidMount() {
    this.props.onRequestArticles();
  }
  render() {
    let articles = this.props.articleList.map(article => {
      console.log(article);
      return (
        <ArticlePreview
          imgUrl={article.author.image}
          authorName={article.author.username}
          publishedDate={article.createdAt}
          likes={article.favoritesCount}
        >
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <span>Read more...</span>
        </ArticlePreview>
      );
    });
    return (
      <div>
        <ToggleFeed />
        {articles}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListView);
