import React from "react";
import ArticlePreview from "../../components/ArticlePreview/";
import ToggleFeed from "../ToggleFeed/";

const ArticleListView = () => (
  <div>
    <ToggleFeed />
    <ArticlePreview
      imgUrl="http://i.imgur.com/Qr71crq.jpg"
      authorName="Eric Simons"
      publishedDate="January 20th"
      likes={29}
    >
      <h1>How to build webapps that scale</h1>
      <p>This is the description for the post.</p>
      <span>Read more...</span>
    </ArticlePreview>
    <ArticlePreview
      imgUrl="http://i.imgur.com/N4VcUeJ.jpg"
      authorName="Albert Pai"
      publishedDate="January 20th"
      likes={32}
    >
      <h1>
        The song you won't ever stop singing. No matter how hard you try.
      </h1>
      <p>This is the description for the post.</p>
      <span>Read more...</span>
    </ArticlePreview>
  </div>
);

export default ArticleListView;
