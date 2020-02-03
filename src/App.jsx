import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Articles from './routes/Articles';
import Footer from './components/Footer';

const articles = require('./articles/articles.json');
const articlesPerPage = 3;

function App() {
  const { pathname } = useLocation();
  const pageNum = Number(pathname.split('/').slice(-1)) || 0;

  const getPageArticles = pageNum => {
    const from = (pageNum - 1) * articlesPerPage;
    const to = articlesPerPage;

    console.log(articlesPerPage, pageNum, from, to);

    return articles.splice(from, to);
  };

  return (
    <main id='App'>
      <header>
        <h1>It's a Website!</h1>
        <Nav />
      </header>

      <Switch>
        <Route
          path='/articles/:pageNum'
          render={props => (
            <Articles {...props} articleData={getPageArticles(pageNum)} />
          )}
          exact
        />
      </Switch>

      <Footer />
    </main>
  );
}

export default App;
