import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleView from '../components/ArticleView';
import ArticleModel from '../models/ArticleModel';
// const articles = require('../articles/articles.json');

function Articles({ articleData }) {
  const pageNum = Number(useParams().pageNum) || 0;
  console.log(`pageNum: ${pageNum}`);

  const articleTags = articleData.map((article, index) => (
    <ArticleView key={index} content={new ArticleModel(article)} />
  ));

  return (
    <React.Fragment>
      {articleTags}

      <section className='callout'>
        <section>
          <h3>Dig It? Dig This!</h3>
          <button data-gtm-account='register'>Create an account</button>
          <button data-gtm-subscribe='main-list'>
            Subscribe to our mailing list
          </button>
        </section>

        <section>
          <h4>Sharing is caring!</h4>
          <p>Tell your buds</p>
          <button data-gtm-share='facebook'>Facebook</button>
          <button data-gtm-share='twitter'>Twitter</button>
          <button data-gtm-share='geocities'>Geocities</button>
        </section>

        <section>
          <h4>Holy Fact Sheet, Batman!</h4>
          <p>
            Need more info?{' '}
            <a href='#App' data-gtm-download='factsheet'>
              Download
            </a>{' '}
            a fact sheet and be the coolest kid in town.
          </p>
        </section>

        <section>
          <h4>Spend! Spend! Spend!</h4>
          <p>Visit our HiTek ECommerce Shopping Palace.</p>
          <button data-gtm-cta='enter-store'>Let's go Shopping</button>
        </section>
      </section>
    </React.Fragment>
  );
}

export default Articles;
