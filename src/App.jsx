import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './routes/Home';
import withTrackingData from './components/TrackingData';
import Nav from './Nav';

function App() {
  return (
    <main id='App'>
      <header>
        <h1>It's a page Header!</h1>
        <nav data-gtm-nav='primary'>
          <ul>
            <li>
              <a href='/'>Nav 1</a>
            </li>
            <li>
              <a href='#App'>Nav 2</a>
            </li>
            <li>
              <a href='#App'>Nav 3</a>
            </li>
            <li>
              <a href='#App'>Nav 4</a>
            </li>
            <li>
              <a href='#App'>Nav 5</a>
            </li>
            <li>
              <a href='#App'>Nav 6</a>
            </li>
          </ul>
        </nav>

        <nav1></nav1>
      </header>

      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>

      <footer>
        <h3>Das Footer</h3>
        <nav data-gtm-nav='secondary'>
          <ul>
            <li>
              <a href='#App'>Privacy</a>
            </li>
            <li>
              <a href='#App'>Terms & Conditions</a>
            </li>
            <li>
              <a href='#App'>Media</a>
            </li>
            <li>
              <a href='#App'>Disclaimer</a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}

export default App;
