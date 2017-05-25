import React from "react";

const ArticlePreview = ({imgUrl = '', authorName, publishedDate, likes = 0, children}) => (
  <div className="article-preview">
    <div className="article-meta">
      <a href="profile.html"><img src={imgUrl} /></a>
      <div className="info">
        <a href="" className="author">{authorName}</a>
        <span className="date">{publishedDate}</span>
      </div>
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart" /> {likes}
      </button>
    </div>
    <a href="" className="preview-link">
      {children}
    </a>
  </div>
);

export default ArticlePreview;
