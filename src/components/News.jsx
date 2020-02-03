import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleView from './ArticleView';
import ArticleModel from '../models/ArticleModel';

function News({ articleData }) {
  const pageNum = Number(useParams().pageNum) || 0;
  console.log(`pageNum: ${pageNum}`);
  console.log(articleData);

  const articleTags = articleData.map((article, index) => (
    <ArticleView key={index} content={new ArticleModel(article)} />
  ));

  return <React.Fragment>{articleTags}</React.Fragment>;
}

export default News;
