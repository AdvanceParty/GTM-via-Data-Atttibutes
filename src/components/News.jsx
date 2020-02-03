import React from 'react';
import Article from './Article';

function News({ articles }) {
  const articleTags = articles.map((content, index) => (
    <Article key={index} content={content} />
  ));

  return <React.Fragment>{articleTags}</React.Fragment>;
}

export default News;
