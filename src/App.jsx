import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import AboutWorld from './routes/AboutWorld';
// import withTrackingData from './components/TrackingData';
// import Nav from './Nav';

function App() {
  return (
    <main id='App'>
      <header>
        <h1>It's a page Header!</h1>
        <nav data-gtm-nav='primary'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/about/world'>About The World</Link>
            </li>
            <li>
              <a href='/decoy.html'>Decoy Page!</a>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/home' component={Home} exact />
        <Route path='/about' component={About} exact />
        <Route path='/about/world' component={AboutWorld} exact />
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
