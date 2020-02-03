import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import News from './components/News';

// embed data from json files at build time
import GTM_CONFIG from './gtm_config.json';
const articles = require('./content/articles.json');

// setup GTM via react-gtm-module
const tagManagerArgs = { gtmId: GTM_CONFIG.GTM_ID };
TagManager.initialize(tagManagerArgs);

function App() {
  const articlesPerPage = 3;
  const { pathname } = useLocation();
  const pageNum = Number(pathname.split('/').slice(-1)) || 0;

  const getPageArticles = pageNum => {
    const first = (pageNum - 1) * articlesPerPage;
    return articles.slice(first, first + articlesPerPage);
  };

  return (
    <main id='App'>
      <header>
        <h1>It's a Website!</h1>
        <Nav />
      </header>

      <Switch>
        <Route path='/' component={Home} exact />>
        <Route
          path='/news/:pageNum'
          render={props => (
            <News {...props} articleData={getPageArticles(pageNum)} />
          )}
          exact
        />
      </Switch>

      <Footer />
    </main>
  );
}

export default App;
